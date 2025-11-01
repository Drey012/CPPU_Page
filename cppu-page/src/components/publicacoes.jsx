import { useEffect, useState } from 'react';
import Head from 'next/head';
import BlogPosts from './BlogPosts';
import SkeletonPost from './SkeletonPost';
import styles from '../styles/Publicacoes.module.css';
import { motion } from 'framer-motion';

const PAGE_SIZE = 6;
const SKELETONS = 3;

export default function Publicacoes() {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch('https://cppuapi-production.up.railway.app/blogger')
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.error || 'Erro ao conectar ao servidor.');
        }
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        const postsArray = Array.isArray(data.posts)
          ? data.posts
          : (data.posts && Array.isArray(data.posts.items) ? data.posts.items : []);
        setAllPosts(postsArray);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        console.error('Erro ao carregar posts:', err.message);
        setError('Não foi possível carregar as publicações.');
        setLoading(false);
      });

    return () => { mounted = false; };
  }, []);

  // Paginação local
  const start = (currentPage - 1) * PAGE_SIZE;
  const visiblePosts = allPosts.slice(start, start + PAGE_SIZE);

  // Observa mudanças de página e faz o scroll depois da renderização
  useEffect(() => {
    if (!loading) {
      // Adiciona um pequeno delay para garantir que o layout foi atualizado
      const timeout = setTimeout(scrollToTop, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentPage, loading]);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Animação geral da seção
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <main className={styles.container}>
      <Head>
        <title>Publicações — CPPU</title>
        <meta name="description" content="Acompanhe as últimas publicações e novidades do CPPU." />
      </Head>

      <motion.div
        className={styles.blogSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
      >
        <h1 className={styles.sectionTitle}>Publicações</h1>

        {/* Estado de carregamento */}
        {loading && (
          <div className={styles.blogPostsGrid}>
            {Array.from({ length: SKELETONS }).map((_, i) => (
              <SkeletonPost key={i} />
            ))}
          </div>
        )}

        {/* Estado de erro */}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        {/* Nenhum post */}
        {!loading && !error && visiblePosts.length === 0 && (
          <p style={{ textAlign: 'center' }}>Nenhuma publicação encontrada.</p>
        )}

        {/* Posts carregados */}
        {!loading && visiblePosts.length > 0 && (
          <>
            <BlogPosts posts={visiblePosts} />

            {/* Paginação */}
            <div className={styles.pageIndicator}>
              Página {currentPage} de {totalPages}
            </div>

            <div className={styles.pagination}>
              <button
                className={`${styles.paginationButton} ${styles.prev}`}
                onClick={handlePrev}
                disabled={currentPage === 1}
              >
                Página anterior
              </button>

              <button
                className={styles.paginationButton}
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Próxima página
              </button>
            </div>
          </>
        )}
      </motion.div>
    </main>
  );
}
