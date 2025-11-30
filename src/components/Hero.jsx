import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import Button from './Button';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <Image
        src="/banner_cppu.png"
        alt="Cursinho Popular Pimentas Unifesp"
        fill
        priority
        quality={75}
        sizes="100vw"
        className={styles.heroImage}
      />
      <div className={styles.heroContent}>
        <h1>Cursinho Popular Pimentas Unifesp</h1>
        <p>Preparando jovens para ingressar no ensino superior com qualidade e acessibilidade</p>
        <div className={styles.buttonGroup}>
          <Button href="#materiais" variant="primary">Materiais de estudo</Button>
          <Button href="https://www.gov.br/mec/pt-br/cpop" variant="accent">CPOP</Button>
        </div>
      </div>
    </section>
  );
}