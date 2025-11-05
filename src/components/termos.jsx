"use client"

import { useEffect } from "react"
import styles from "../styles/Termos.module.css"

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Termos de Uso - CPPU"
  }, [])

  return (
    <>
      <main className={styles.termsContainer}>
        <div className={styles.termsContent}>
          <header className={styles.termsHeader}>
            <h1 className={styles.termsTitle}>Termos de Uso</h1>
            <p className={styles.termsSubtitle}>Cursinho Popular Pimentas Unifesp (CPPU)</p>
            <p className={styles.lastUpdated}>Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </header>

          <article>
            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>1. Termos</h2>
              <div className={styles.sectionContent}>
                <p>
                  Ao acessar ao site Cursinho Unifesp Guarulhos - CPPU, concorda em cumprir estes termos de serviço,
                  todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis
                  locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar
                  este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas
                  comerciais aplicáveis.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>2. Uso de Licença</h2>
              <div className={styles.sectionContent}>
                <p>
                  É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no
                  site Cursinho Unifesp Guarulhos - CPPU, apenas para visualização transitória pessoal e não comercial.
                  Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>

                <ul className={styles.restrictionsList}>
                  <li>Modificar ou copiar os materiais;</li>
                  <li>
                    Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não
                    comercial);
                  </li>
                  <li>
                    Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Cursinho Unifesp
                    Guarulhos - CPPU;
                  </li>
                  <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                  <li>
                    Transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.
                  </li>
                </ul>

                <div className={styles.highlight}>
                  <p>
                    Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
                    rescindida por Cursinho Unifesp Guarulhos - CPPU a qualquer momento.
                  </p>
                </div>

                <p>
                  Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os
                  materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>3. Isenção de Responsabilidade</h2>
              <div className={styles.sectionContent}>
                <p>
                  Os materiais no site da Cursinho Unifesp Guarulhos - CPPU são fornecidos 'como estão'. Cursinho
                  Unifesp Guarulhos - CPPU não oferece garantias, expressas ou implícitas, e, por este meio, isenta e
                  nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de
                  comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra
                  violação de direitos.
                </p>
                <p>
                  Além disso, o Cursinho Unifesp Guarulhos - CPPU não garante ou faz qualquer representação relativa à
                  precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra
                  forma relacionado a esses materiais ou em sites vinculados a este site.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>4. Limitações</h2>
              <div className={styles.sectionContent}>
                <p>
                  Em nenhum caso o Cursinho Unifesp Guarulhos - CPPU ou seus fornecedores serão responsáveis ​​por
                  quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção
                  dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Cursinho Unifesp Guarulhos
                  - CPPU, mesmo que Cursinho Unifesp Guarulhos - CPPU ou um representante autorizado da Cursinho Unifesp
                  Guarulhos - CPPU tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                </p>
                <p>
                  Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de
                  responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>5. Precisão dos Materiais</h2>
              <div className={styles.sectionContent}>
                <p>
                  Os materiais exibidos no site da Cursinho Unifesp Guarulhos - CPPU podem incluir erros técnicos,
                  tipográficos ou fotográficos. Cursinho Unifesp Guarulhos - CPPU não garante que qualquer material em
                  seu site seja preciso, completo ou atual. Cursinho Unifesp Guarulhos - CPPU pode fazer alterações nos
                  materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Cursinho Unifesp
                  Guarulhos - CPPU não se compromete a atualizar os materiais.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>6. Links</h2>
              <div className={styles.sectionContent}>
                <p>
                  O Cursinho Unifesp Guarulhos - CPPU não analisou todos os sites vinculados ao seu site e não é
                  responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso
                  por Cursinho Unifesp Guarulhos - CPPU do site. O uso de qualquer site vinculado é por conta e risco do
                  usuário.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>7. Modificações</h2>
              <div className={styles.sectionContent}>
                <p>
                  O Cursinho Unifesp Guarulhos - CPPU pode revisar estes termos de serviço do site a qualquer momento,
                  sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de
                  serviço.
                </p>
              </div>
            </section>

            <section className={styles.termsSection}>
              <h2 className={styles.sectionTitle}>8. Lei Aplicável</h2>
              <div className={styles.sectionContent}>
                <p>
                  Estes termos e condições são regidos e interpretados de acordo com as leis do Cursinho Unifesp
                  Guarulhos - CPPU e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele
                  estado ou localidade.
                </p>
              </div>
            </section>
          </article>

          {/* <aside className={styles.contactInfo}>
            <h3 className={styles.contactTitle}>Dúvidas sobre os Termos?</h3>
            <p className={styles.contactText}>
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail:{" "}
              <a href="mailto:contato@cppu.org.br" className={styles.contactEmail}>
                contato@cppu.org.br
              </a>
            </p>
          </aside> */}
        </div>
      </main>
    </>
  )
}
