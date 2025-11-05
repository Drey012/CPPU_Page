import styles from '../styles/Hero.module.css';
import Button from './Button';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Cursinho Popular Pimentas Unifesp</h1>
        <p>Preparando jovens para ingressar no ensino superior com qualidade e acessibilidade</p>
        <div className={styles.buttonGroup}>
          <Button href="#pre-inscricoes" variant="primary">Pré-inscrições</Button>
          <Button href="#apostilas" variant="accent">Apostilas</Button>
        </div>
      </div>
    </section>
  );
}