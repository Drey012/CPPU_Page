import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../../styles/artigo.module.css';

export default function PublicacaoIndividual() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Buscar post individual
  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://cppuapi-production.up.railway.app/getUniquePost.php?slug=${slug}`);
        
        if (!res.ok) throw new Error('Erro ao carregar publicação');
        
        const data = await res.json();
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setPost(data);
      } catch (err) {
        console.error('Erro:', err);
        setError(err.message);
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

  if (error) {
    return (
      <main className={styles.container}>
        <div className={styles.errorContainer}>
          <h1>Erro</h1>
          <p>{error}</p>
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

  if (!post) {
    return (
      <main className={styles.container}>
        <div className={styles.errorContainer}>
          <h1>Publicação não encontrada</h1>
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
            />
          </div>
        )}

        {/* Conteúdo do artigo */}
        <div 
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Rodapé do artigo */}
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
        </footer>
      </motion.article>
    </main>
  );
}