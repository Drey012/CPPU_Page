import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Colaboradores.module.css"

export default function Colaboradores() {
  return (
    <>
      <Head>
        <title>Colaboradores | CPPU</title>
        <meta name="description" content="Conheça os parceiros e colaboradores do Cursinho Popular Pimentas Unifesp" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Colaboradores</h1>

          <section className={styles.partnersSection}>
            <h2 className={styles.sectionTitle}>PARCEIROS:</h2>

            <div className={styles.partnersGrid}>
              <div className={styles.partnerCard}>
                <div className={styles.partnerImageContainer}>
                  <Image
                    src="/portas_abertas.png"
                    alt="Cursinho Popular PORTAS Abertas"
                    width={300}
                    height={150}
                    className={styles.partnerImage}
                  />
                </div>
                <h3 className={styles.partnerName}>Cursinho Popular PORTAS Abertas</h3>
                <p className={styles.partnerDescription}>
                  Parceiro na missão de democratizar o acesso ao ensino superior através da educação popular.
                </p>
              </div>

              <div className={styles.partnerCard}>
                <div className={styles.partnerImageContainer}>
                  <Image
                    src="/logo_CCP.png"
                    alt="Cursinho Comunitário Pimentas"
                    width={300}
                    height={150}
                    className={styles.partnerImage}
                  />
                </div>
                <h3 className={styles.partnerName}>Cursinho Comunitário Pimentas</h3>
                <p className={styles.partnerDescription}>
                  Juntos Somos Melhores!!! Parceiro na transformação social através da educação.
                </p>
              </div>
            </div>
          </section>

          <section className={styles.missionSection}>
            <div className={styles.missionContainer}>
              <h2 className={styles.missionTitle}>CPPU 2025 - Educar para Pertencer!</h2>
              <p className={styles.missionText}>
                O Cursinho Popular Pimentas Unifesp tem como missão proporcionar educação de qualidade e acessível,
                preparando jovens para ingressar no ensino superior e transformar suas realidades.
              </p>
            </div>
          </section>

          <section className={styles.joinSection}>
            <h2 className={styles.joinTitle}>Quer ser um colaborador?</h2>
            <p className={styles.joinText}>
              Estamos sempre abertos a novas parcerias que compartilhem nossa missão de democratizar o acesso à
              educação.
            </p>
            <a href="#contato" className={styles.joinButton}>
              Entre em contato
            </a>
          </section>
        </div>
      </main>
    </>
  )
}
