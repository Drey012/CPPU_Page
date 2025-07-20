import Link from 'next/link';
import styles from '../styles/PostCard.module.css';

const PostCard = ({ title, excerpt, imageUrl, slug, date }) => {
  return (
    <article className={styles.postCard}>
      <div 
        className={styles.postImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.postContent}>
        <div className={styles.postMeta}>
          <span className={styles.postDate}>{date}</span>
        </div>
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.postExcerpt}>{excerpt}</p>
        <Link href={`/blog/${slug}`} className={styles.readMore}>
          Ler mais →
        </Link>
      </div>
    </article>
  );
};

export default PostCard;