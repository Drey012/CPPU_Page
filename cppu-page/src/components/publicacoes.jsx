import { useEffect, useState } from 'react';
import Head from 'next/head';
import BlogPosts from './BlogPosts';
import SkeletonPost from './SkeletonPost';
import styles from '../styles/Publicacoes.module.css';

const PAGE_SIZE = 6; // número de posts por página
const SKELETONS = 3; // número de skeletons a mostrar durante o carregamento

export default function Publicacoes() {
	const [allPosts, setAllPosts] = useState([]);
	const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		let mounted = true;
		setLoading(true);
		fetch('https://cppuapi-production.up.railway.app/blogger')
			.then(res => res.json())
			.then(data => {
				if (!mounted) return;
				setAllPosts(Array.isArray(data) ? data : []);
				setLoading(false);
			})
			.catch(err => {
				if (!mounted) return;
				console.error('Erro ao carregar posts:', err);
				setError('Não foi possível carregar as publicações.');
				setLoading(false);
			});

		return () => { mounted = false; };
	}, []);

	const handleLoadMore = () => {
		setVisibleCount(prev => Math.min(prev + PAGE_SIZE, allPosts.length));
	};

	// posts a mostrar baseado na paginação local
	const visiblePosts = allPosts.slice(0, visibleCount);

	return (
		<main className={styles.container}>
			<Head>
				<title>Publicações — CPPU</title>
			</Head>

			<div className={styles.blogSection} style={{ padding: '2rem' }}>
				<h1 className={styles.sectionTitle}>Publicações</h1>

				{loading && (
					<div className={styles.blogPostsGrid}>
						{Array.from({ length: SKELETONS }).map((_, i) => (
							<SkeletonPost key={i} />
						))}
					</div>
				)}

				{error && <p style={{ color: 'red' }}>{error}</p>}

				{!loading && !error && visiblePosts.length === 0 && (
					<p>Nenhuma publicação encontrada.</p>
				)}

				{!loading && visiblePosts.length > 0 && (
					<>
						<BlogPosts posts={visiblePosts} limit={20} />

						<div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
							{visibleCount < allPosts.length ? (
								<button
									className={styles.loadMoreButton || ''}
									onClick={handleLoadMore}
									aria-label="Carregar mais publicações"
								>
									Carregar mais
								</button>
							) : (
								<p>Você alcançou o fim das publicações.</p>
							)}
						</div>
					</>
				)}
			</div>
		</main>
	);
}
