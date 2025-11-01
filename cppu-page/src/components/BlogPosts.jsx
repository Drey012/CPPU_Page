import PostCard from './PostCard';
import styles from '../styles/BlogPosts.module.css';

// Recebe props: { posts, limit }
const BlogPosts = ({ posts = [], limit }) => {
  const displayedPosts = typeof limit === 'number' ? posts.slice(0, limit) : posts;

  return (
    <section id="blog" className={styles.blogSection}>
      {limit == 3 && (
                <h2 className={styles.sectionTitle}>Últimas Publicações</h2>
      )}
      <div className={styles.blogPostsGrid}>
        {displayedPosts.map((post, i) => (
          <PostCard
            key={post.slug}
            index={i}
            title={post.title}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
            slug={post.slug}
            date={post.date}
            url={post.url}
          />
        ))}
      </div>
      {limit == 3 && (
        <div className={styles.seeAllContainer}>
          <a href="/publicacoes" className={styles.seeAllButton}>
            Ver todas as publicações
          </a>
        </div>
      )}
    </section>
  );
};

export default BlogPosts;