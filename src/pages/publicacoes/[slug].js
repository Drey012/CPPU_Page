import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion } from 'framer-motion';
import SanitizedContent from '../../components/SanitizedContent';
import styles from '../../styles/artigo.module.css';

export default function PublicacaoIndividual() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Buscar post individual com cache
  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      // Verificar cache primeiro
      const cacheKey = `post-${slug}`;
      const cached = sessionStorage.getItem(cacheKey);
      
      if (cached) {
        setPost(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

        const res = await fetch(
          `https://cppuapi-production.up.railway.app/getUniquePost.php?slug=${slug}`,
          { signal: controller.signal }
        );
        
        clearTimeout(timeoutId);
        
        if (!res.ok) throw new Error('Erro ao carregar publicação');
        
        const data = await res.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        // Cache na sessionStorage (dura durante a sessão)
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        setPost(data);
      } catch (err) {
        console.error('Erro:', err);
        setError(err.name === 'AbortError' ? 'Tempo limite excedido' : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Animação
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: 'easeOut' 
      } 
    },
  };

  if (loading) {
    return (
      <main className={styles.container}>
        <div className={styles.loadingContainer}>
          <div className={styles.skeletonHeader}></div>
          <div className={styles.skeletonImage}></div>
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className={styles.container}>
        <div className={styles.errorContainer}>
          <h1>{error ? 'Erro' : 'Publicação não encontrada'}</h1>
          <p>{error || 'A publicação solicitada não existe.'}</p>
          <button 
            onClick={() => router.push('/publicacoes')}
            className={styles.backButton}
          >
            ← Voltar para Publicações
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <Head>
        <title>{post.title} — CPPU</title>
        <meta name="description" content={post.excerpt || 'Publicação do CPPU'} />
      </Head>

      <motion.article
        className={styles.article}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {/* Botão voltar */}
        <nav className={styles.breadcrumb}>
          <button 
            onClick={() => router.push('/publicacoes')}
            className={styles.backButton}
            aria-label="Voltar para lista de publicações"
          >
            ← Voltar para Publicações
          </button>
        </nav>

        {/* Cabeçalho do artigo */}
        <header className={styles.articleHeader}>
          <h1 className={styles.articleTitle}>{post.title}</h1>
          
          <div className={styles.articleMeta}>
            {post.author && (
              <span className={styles.author}>Por {post.author}</span>
            )}
            <span className={styles.date}>{post.date}</span>
          </div>
        </header>

        {/* Imagem destacada */}
        {post.imageUrl && post.imageUrl !== '/default.jpg' && (
          <div className={styles.featuredImage}>
            <img 
              src={post.imageUrl} 
              alt={post.title}
              className={styles.articleImage}
              loading="lazy"
            />
          </div>
        )}

        {/* Conteúdo do artigo com sanitização */}
        <SanitizedContent content={post.content} />

        {/* Rodapé do artigo
        <footer className={styles.articleFooter}>
          <div className={styles.originalPost}>
            <a 
              href={post.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.originalLink}
            >
              Ver publicação original no Blogger →
            </a>
          </div>
        </footer> */}
      </motion.article>
    </main>
  );
}