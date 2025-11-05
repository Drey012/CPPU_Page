import styles from '../styles/Parallax.module.css';

const Parallax = ({ 
  imageUrl, 
  title, 
  subtitle, 
  minHeight = '400px',
  children 
}) => {
  return (
    <div 
      className={styles.parallax}
      style={{
        minHeight,
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className={styles.parallaxOverlay}></div>
      <div className={styles.parallaxContent}>
        {title && <h2 className={styles.parallaxTitle}>{title}</h2>}
        {subtitle && <p className={styles.parallaxSubtitle}>{subtitle}</p>}
        {children}
      </div>
    </div>
  );
};

export default Parallax;