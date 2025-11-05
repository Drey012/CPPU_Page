import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/PostCard.module.css';

const PostCard = ({ title, excerpt, imageUrl, slug, date, url, index }) => {
  // Variantes da animação (fade + slide suave)
  const fadeDown = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.article
      className={styles.postCard}
      variants={fadeDown}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index}
    >
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
        <Link href={'/publicacoes/' + slug} className={styles.readMore}>
          Ler mais →
        </Link>
      </div>
    </motion.article>
  );
};

export default PostCard;
