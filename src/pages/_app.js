// src/pages/_app.js
'use client';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ThemeToggle from '@/components/ThemeToggle';
import togglestyles from '../styles/ThemeToggle.module.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Fechar menu ao navegar
      document.querySelector('.nav')?.classList.remove('open');
      document.querySelector('.hamburger')?.classList.remove('open');
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  });

  return (
    <ThemeProvider>
      <Header />
        <Component {...pageProps} />
        <div className={togglestyles.themeToggleContainer}>
        <ThemeToggle />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;