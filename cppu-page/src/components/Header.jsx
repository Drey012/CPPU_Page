import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Image src="/header_pepper_white.png" alt="Logo" width={50} height={50} className={styles.pepper} />
          <div className={styles.logo}>CPPU</div>
        </div>
        
        {/* Botão Hamburguer */}
        {isMobile && (
          <button 
            className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        {/* Menu de Navegação */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="#inicio" className={styles.navLink} onClick={() => setIsOpen(false)}>Início</Link></li>
            <li><Link href="#pre-inscricoes" className={styles.navLink} onClick={() => setIsOpen(false)}>Pré-inscrições</Link></li>
            <li><Link href="#grade" className={styles.navLink} onClick={() => setIsOpen(false)}>Grade</Link></li>
            <li><Link href="#colaboradores" className={styles.navLink} onClick={() => setIsOpen(false)}>Colaboradores</Link></li>
            <li><Link href="#apostilas" className={styles.navLink} onClick={() => setIsOpen(false)}>Apostilas</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}