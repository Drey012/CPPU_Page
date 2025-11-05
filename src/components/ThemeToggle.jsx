'use client';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/ThemeToggle.module.css'
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';


export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Detecta quando mostrar o botão Back to Top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.toggleContainer}>
      <button 
      onClick={scrollToTop} 
      className={`${styles.backToTop} ${showBackToTop ? styles.show : ''}`} 
      aria-label="Voltar ao topo">
        <ChevronUp size={24} />
      </button>
      <button
        onClick={toggleDarkMode}
        suppressHydrationWarning={true}
        className={styles.themeToggle}
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
}