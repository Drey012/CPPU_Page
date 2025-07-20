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
  return (
    <>
      <Head>
        <title>CPPU - Cursinho Popular Pimentas Unifesp</title>
        <meta name="description" content="Preparando jovens para ingressar no ensino superior com qualidade e acessibilidade" />
      </Head>
      
      <Header />
      <main>
        <Hero />
        <About />
        <Parallax 
          imageUrl="/images/parallax-education.jpg"
          title="Transformando vidas através da educação"
          subtitle="Já ajudamos mais de 200 estudantes a realizarem o sonho de ingressar na universidade"
        />
        <BlogPosts />
        <Map />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}