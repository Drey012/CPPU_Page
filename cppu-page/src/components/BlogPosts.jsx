import PostCard from './PostCard';
import styles from '../styles/BlogPosts.module.css';

// Recebe props: { posts, limit }
const BlogPosts = ({ posts = [], limit }) => {
  const displayedPosts = typeof limit === 'number' ? posts.slice(0, limit) : posts;

  return (
    <section id="blog" className={styles.blogSection}>
      <div className={styles.blogPostsGrid}>
        {displayedPosts.map((post) => (
          <PostCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
            slug={post.slug}
            date={post.date}
            url={post.url}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogPosts;