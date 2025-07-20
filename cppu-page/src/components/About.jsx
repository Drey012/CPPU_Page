import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Sobre o CPPU</h2>
      <div className={styles.about}>
        <p>O <strong>Cursinho Popular Pimentas Unifesp (CPPU)</strong> é uma iniciativa de estudantes e professores da UNIFESP que visa oferecer preparação para o vestibular de forma acessível à comunidade do bairro dos Pimentas e região.</p>
        <p>Nossa missão é democratizar o acesso ao ensino superior, oferecendo aulas de qualidade ministradas por estudantes universitários e professores voluntários.</p>
      </div>
    </section>
  );
}