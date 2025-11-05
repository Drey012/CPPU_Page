import styles from '../styles/Publicacoes.module.css';

export default function SkeletonPost() {
  return (
    <article className={styles.skeletonCard} aria-hidden="true">
      {/* Imagem skeleton - mesma altura do PostCard */}
      <div className={styles.skeletonImage} />
      
      <div className={styles.skeletonContent}>
        {/* Data - linha mais curta */}
        <div className={styles.skeletonLine} style={{ width: '40%', height: '14px' }} />
        
        {/* Título - 2 linhas como no PostCard real */}
        <div className={styles.skeletonLine} style={{ width: '90%', height: '20px', marginBottom: '8px' }} />
        <div className={styles.skeletonLine} style={{ width: '70%', height: '20px', marginBottom: '12px' }} />
        
        {/* Excerpt - 3 linhas de texto */}
        <div className={styles.skeletonLine} style={{ width: '100%', height: '14px', marginBottom: '6px' }} />
        <div className={styles.skeletonLine} style={{ width: '95%', height: '14px', marginBottom: '6px' }} />
        <div className={styles.skeletonLine} style={{ width: '60%', height: '14px', marginBottom: '15px' }} />
        
        {/* Botão "Ler mais" */}
        <div className={styles.skeletonLine} style={{ width: '30%', height: '16px' }} />
      </div>
    </article>
  );
}