// src/components/ThemeToggle.jsx
'use client';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button 
      onClick={toggleDarkMode}
      suppressHydrationWarning={true}
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}