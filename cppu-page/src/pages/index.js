import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Parallax from '../components/Parallax';
import BlogPosts from '../components/BlogPosts';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/CPPU_API/cppu-api/BloggerIntegration.php') // ajuste para a URL da sua API PHP
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Erro ao carregar posts:', err));
  }, []);

  return (
    <>
      <Head>
        <title>CPPU - Cursinho Popular Pimentas Unifesp</title>
        <meta
          name="description"
          content="Preparando jovens para ingressar no ensino superior com qualidade e acessibilidade"
        />
      </Head>

      <main>
        <Hero />
        <About />
        <Parallax
          imageUrl="/images/parallax-education.jpg"
          title="Transformando vidas através da educação"
          subtitle="Já ajudamos mais de 200 estudantes a realizarem o sonho de ingressar na universidade"
        />
        <BlogPosts posts={posts} />
        <Map />
        <ContactForm />
      </main>
    </>
  );
}
