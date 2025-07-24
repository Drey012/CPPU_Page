import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>CPPU</h3>
          <p className={styles.footerDescription}>
            Cursinho Popular Pimentas Unifesp - Preparando jovens para ingressar no ensino superior com qualidade e acessibilidade.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Links Rápidos</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/" className={styles.footerLink}>Início</Link></li>
            <li><Link href="#pre-inscricoes" className={styles.footerLink}>Pré-inscrições</Link></li>
            <li><Link href="#grade" className={styles.footerLink}>Grade Curricular</Link></li>
            <li><Link href="#apostilas" className={styles.footerLink}>Apostilas</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Contato</h4>
          <address className={styles.footerContact}>
            <p>UNIFESP - Campus Guarulhos</p>
            <p>Estr. do Caminho Velho, 333 - Jardim Nova Cidade, 07252-312</p>
            <p>Guarulhos - SP</p>
            <p>Email: contato@cppu.org.br</p>
            {/* <p>Telefone: (11) 1234-5678</p> */}
          </address>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.footerSubtitle}>Redes Sociais</h4>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/cursinhounifespguarulhos/" aria-label="Facebook" className={styles.socialIcon}>
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/grucppu/" aria-label="Instagram" className={styles.socialIcon}>
              <FaInstagram />
            </a>
            {/* <a href="https://twitter.com" aria-label="Twitter" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className={styles.socialIcon}>
              <FaYoutube />
            </a> */}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerLegal}>
          <Link href="/privacidade" className={styles.footerLegalLink}>Política de Privacidade</Link>
          <span className={styles.footerSeparator}>|</span>
          <Link href="/termos" className={styles.footerLegalLink}>Termos de Uso</Link>
          <span className={styles.footerSeparator}>|</span>
          <Link href="#colaboradores" className={styles.footerLegalLink}>Colaboradores</Link>
        </div>
        <p className={styles.footerCopyright}>
          © {new Date().getFullYear()} Cursinho Popular Pimentas Unifesp (CPPU) - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;