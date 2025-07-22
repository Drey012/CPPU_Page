// src/components/ThemeToggle.jsx
'use client';
import { useTheme } from '../context/ThemeContext';
import styles from '../styles/ThemeToggle.module.css'

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button 
      onClick={toggleDarkMode}
      suppressHydrationWarning={true}
      className={styles.themeToggle}
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}