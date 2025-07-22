// src/pages/_app.js
'use client';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;