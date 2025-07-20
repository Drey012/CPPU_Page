import Link from 'next/link';
import styles from '../styles/Header.module.css';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>CPPU</div>
        <nav>
          <ul className={styles.navList}>
            <li><Link href="#inicio" className={styles.navLink}>Início</Link></li>
            <li><Link href="#pre-inscricoes" className={styles.navLink}>Pré-inscrições</Link></li>
            <li><Link href="#grade" className={styles.navLink}>Grade</Link></li>
            <li><Link href="#colaboradores" className={styles.navLink}>Colaboradores</Link></li>
            <li><Link href="#apostilas" className={styles.navLink}>Apostilas</Link></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}