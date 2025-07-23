import styles from '../styles/About.module.css';

export default function About() {
  return (
    <section>
      <h2 className={styles.sectionTitle}>Sobre o CPPU</h2>
      <div className={styles.about}>
        <p>O <strong>Cursinho Popular Pimentas Unifesp (CPPU)</strong>  foi fundado em 2009 por discentes voluntários da Universidade Federal de São Paulo com o objetivo de trabalhar a educação e a cultura popular em suas diversas manifestações. Em 2012, O CPPU se juntou ao grupo de voluntários do Cursinho Cruz e Souza, polo ligado so EDUCAFRO, fundado pelo professor Fabio Santos Santana, agregando ao mesmo apoio de grupos sociais populares e institucionais da região dos Pimentas como escolas públicas, igrejas de matizes cristão e africanas, organização não governamentais (Ongs) de inclusão sociais, sindicatos, liderança políticas e grupos culturais afro-brasileiros da região dos Pimentas. O CPPU, com nome nas redes de Cursinho Unifesp Guarulhos, nesses 16 anos de projeto social voluntário já atendeu mais de 2.500 pessoas das região do bairro dos Pimentas desde sempre objetivando a inclusão de estudante carentes oriundo de escola pública e cotistas (negros, pardos e pessoas com deficiência) com o foco em desenvolver condições de ingressar em uma universidades de excelência, desenvolvendo nesse caminho de diálogo com o saber a consciência do estudante para avaliar a realidade na qual está inserido e saber qual é o seu papel como cidadão, ser humano e futuro universitário na criação de uma sociedade mais justa, inclusiva e crítica. Atualmente, o pré-universitário CPPU é um projeto popular que atende em média 250 alunos por ano contando com o trabalho voluntário de ex-alunos do CPPU, discentes da Unifesp, professores e funcionários da rede pública, profissionais liberais e militância sociais da região dos Pimentas em Guarulhos/SP.</p>
        <p>Nossa missão é democratizar o acesso ao ensino superior, oferecendo aulas de qualidade ministradas por estudantes universitários e professores voluntários.</p>
      </div>
    </section>
  );
}