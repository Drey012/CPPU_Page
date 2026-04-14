import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import Button from './Button';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [inscricoes, setInscricoes] = useState({ ativas: false, link: '' });

  useEffect(() => {
    fetch('https://cppuapi-production.up.railway.app/checkInscricoes')
      .then(res => res.json())
      .then(data => setInscricoes({ ativas: data.inscricoesAtivas, link: data.link || '' }))
      .catch(err => console.error('Erro ao verificar inscrições:', err));
  }, []);

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
          {inscricoes.ativas ? (
            <Button href={inscricoes.link} variant="primary">Inscrições</Button>
          ) : (
            <Button href="#materiais" variant="primary">Materiais de estudo</Button>
          )}
          <Button href="https://www.gov.br/mec/pt-br/cpop" variant="accent">CPOP</Button>
        </div>
      </div>
    </section>
  );
}