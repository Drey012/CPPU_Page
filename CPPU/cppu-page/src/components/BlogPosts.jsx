import PostCard from './PostCard';
import styles from '../styles/BlogPosts.module.css';

const BlogPosts = ({ posts = [] }) => {
  return (
    <section id="blog" className={styles.blogSection}>
      <h2 className={styles.sectionTitle}>Últimas Publicações</h2>
      <div className={styles.blogPostsGrid}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
            slug={post.slug}
            date={post.date}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;