"use client"

import { useEffect } from "react"
import styles from "../styles/Privacidade.module.css"

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Política de Privacidade - CPPU"
  }, [])

  return (
    <>
      <main className={styles.privacyContainer}>
        <div className={styles.privacyContent}>
          <header className={styles.privacyHeader}>
            <h1 className={styles.privacyTitle}>Política de Privacidade</h1>
            <p className={styles.termsSubtitle}>Cursinho Popular Pimentas Unifesp (CPPU)</p>
            <p className={styles.lastUpdated}>Última atualização: Julho de 2025</p>
          </header>

          <article>
            <section className={styles.termsSection}>
              <div className={styles.sectionContent}>
                <p>
                  A sua privacidade é importante para nós. Esta Política de Privacidade descreve como o Cursinho Unifesp
                  Guarulhos - CPPU coleta, usa e protege as informações pessoais dos visitantes do site, em conformidade
                  com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>Coleta de Informações</h2>
              <div className={styles.sectionContent}>
                <p>
                  Coletamos informações pessoais apenas quando necessário para oferecer nossos serviços de forma
                  eficiente. Essas informações podem incluir nome, email, telefone, entre outros dados fornecidos
                  voluntariamente por você através de formulários, contatos ou interações com o site.
                </p>
                <p>
                  Toda coleta é feita de maneira justa, legal e com o seu consentimento, sempre informando o motivo da
                  solicitação e como os dados serão utilizados.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>Armazenamento e Segurança</h2>
              <div className={styles.sectionContent}>
                <p>
                  As informações são armazenadas pelo tempo necessário para fornecer o serviço solicitado. Adotamos
                  medidas de segurança técnicas e administrativas para proteger seus dados contra acesso, uso,
                  modificação ou divulgação não autorizados.
                </p>
                <p>
                  Não compartilhamos suas informações pessoais com terceiros, exceto quando exigido por lei ou com o seu
                  consentimento expresso.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>Links para Sites Externos</h2>
              <div className={styles.sectionContent}>
                <p>
                  Nosso site pode conter links para páginas de terceiros. Reforçamos que não temos controle sobre o
                  conteúdo ou as políticas de privacidade desses sites e, portanto, não nos responsabilizamos por suas
                  práticas.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>Uso de Cookies</h2>
              <div className={styles.sectionContent}>
                <p>
                  Utilizamos cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos
                  armazenados no seu dispositivo que ajudam a lembrar preferências e entender como o site está sendo
                  utilizado.
                </p>
                <p>
                  Você pode configurar seu navegador para recusar cookies, porém isso pode afetar algumas
                  funcionalidades do site.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>Seus Direitos</h2>
              <div className={styles.sectionContent}>
                <p>Você tem o direito de:</p>

                <div className={styles.rightsGrid}>
                  <div className={styles.rightItem}>
                    <div className={styles.rightTitle}>Acessar seus dados</div>
                    <div className={styles.rightDescription}>
                      Solicitar informações sobre quais dados pessoais temos sobre você
                    </div>
                  </div>

                  <div className={styles.rightItem}>
                    <div className={styles.rightTitle}>Correção de dados</div>
                    <div className={styles.rightDescription}>
                      Solicitar a correção de informações incorretas ou desatualizadas
                    </div>
                  </div>

                  <div className={styles.rightItem}>
                    <div className={styles.rightTitle}>Exclusão de dados</div>
                    <div className={styles.rightDescription}>
                      Solicitar a remoção de suas informações pessoais de nossos sistemas
                    </div>
                  </div>

                  <div className={styles.rightItem}>
                    <div className={styles.rightTitle}>Revogar consentimento</div>
                    <div className={styles.rightDescription}>
                      Retirar seu consentimento para o tratamento de dados a qualquer momento
                    </div>
                  </div>
                </div>

                <p>
                  Para exercer esses direitos, entre em contato conosco pelo email:{" "}
                  <a href="mailto:contato@cppu.com.br" className={styles.contactEmail}>
                    contato@cppu.com.br
                  </a>
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>Compromisso do Usuário</h2>
              <div className={styles.sectionContent}>
                <p>
                  O usuário se compromete a utilizar o site do Cursinho Unifesp Guarulhos - CPPU de forma responsável,
                  não realizando atos que:
                </p>

                <ul className={styles.commitmentList}>
                  <li>Sejam ilegais ou contrários à boa fé e à ordem pública;</li>
                  <li>Envolvam conteúdos discriminatórios, ofensivos, racistas ou contra os direitos humanos;</li>
                  <li>
                    Causarem danos aos sistemas físicos ou lógicos do site (ex: introdução de vírus, invasões, etc).
                  </li>
                </ul>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>Mais Informações</h2>
              <div className={styles.sectionContent}>
                <div className={styles.warningBox}>
                  <div className={styles.warningTitle}>Atualizações da Política</div>
                  <p className={styles.warningText}>
                    Esta Política pode ser atualizada periodicamente. O uso continuado do site será interpretado como
                    aceitação dos termos aqui descritos.
                  </p>
                </div>

                {/* <p>
                  Se você tiver qualquer dúvida sobre esta Política de Privacidade ou sobre o tratamento dos seus dados,
                  entre em contato conosco:
                </p> */}
              </div>
            </section>
          </article>

          {/* <aside className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>Contato para Questões de Privacidade</h3>
            <div className={styles.contactText}>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:contato@cppu.com.br" className={styles.contactEmail}>
                  contato@cppu.com.br
                </a>
              </p>
              <p>
                <strong>Endereço:</strong> Estrada do Caminho Velho, 333 — Guarulhos/SP
              </p>
              <p>
                <strong>UNIFESP - Campus Guarulhos</strong>
              </p>
            </div>
          </aside> */}
        </div>
      </main>
    </>
  )
}
