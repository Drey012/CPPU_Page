import { useEffect, useState } from 'react';
import Head from 'next/head';
import BlogPosts from './BlogPosts';
import SkeletonPost from './SkeletonPost';
import styles from '../styles/Publicacoes.module.css';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PAGE_SIZE = 6; // posts por página local
const SKELETONS = 3;

export default function Publicacoes() {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // calcula total de páginas local
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Função para buscar posts do backend
  const fetchPosts = async (token = null) => {
    setLoading(true);
    try {
      const url = new URL('https://cppuapi-production.up.railway.app/getAllPosts.php');
      if (token) url.searchParams.append('pageToken', token);

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error('Erro ao buscar posts no servidor.');
      const data = await res.json();

      if (Array.isArray(data.posts)) {
        setAllPosts(prev => [...prev, ...data.posts]);
      }
      if (data.nextPageToken) {
        setNextPageToken(data.nextPageToken);
      } else {
        setNextPageToken(null);
      }
    } catch (err) {
      console.error(err);
      setError('Não foi possível carregar as publicações.');
    } finally {
      setLoading(false);
    }
  };

  // Carrega os primeiros 15 posts na montagem
  useEffect(() => {
    fetchPosts();
  }, []);

  // posts visíveis na página local
  const start = (currentPage - 1) * PAGE_SIZE;
  const visiblePosts = allPosts.slice(start, start + PAGE_SIZE);

  // scroll ao mudar de página local
  useEffect(() => {
    const timeout = setTimeout(scrollToTop, 100);
    return () => clearTimeout(timeout);
  }, [currentPage]);

  // Navegação local
  const handleNext = async () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    } else if (nextPageToken) {
      // Busca próximos 15 posts do backend se chegamos no final da lista local
      await fetchPosts(nextPageToken);
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

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

        {loading && allPosts.length === 0 && (
          <div className={styles.blogPostsGrid}>
            {Array.from({ length: SKELETONS }).map((_, i) => (
              <SkeletonPost key={i} />
            ))}
          </div>
        )}

        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

        {!loading && visiblePosts.length === 0 && !error && (
          <p style={{ textAlign: 'center' }}>Nenhuma publicação encontrada.</p>
        )}

        {!loading && visiblePosts.length > 0 && (
          <>
            <BlogPosts posts={visiblePosts} />

            <div className={styles.pageIndicator}>
              Página {currentPage}
            </div>

            <div className={styles.pagination}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ChevronLeft className={styles.paginationIcon} />
              <button
                className={`${styles.paginationButton} ${styles.prev}`}
                onClick={handlePrev}
                disabled={currentPage === 1}
                >
                Página anterior
              </button>
                </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
              <button
                className={styles.paginationButton}
                onClick={handleNext}
                disabled={currentPage === totalPages && !nextPageToken}
              >
                Próxima página 
              </button>
              <ChevronRight className={styles.paginationIcon} />
              </div>
            </div>

            {loading && allPosts.length > 0 && (
              <p style={{ textAlign: 'center', marginTop: '1rem' }}>Carregando mais posts...</p>
            )}
          </>
        )}
      </motion.div>
    </main>
  );
}