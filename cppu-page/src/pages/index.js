import Head from 'next/head';
import Hero from '../components/Hero';
import About from '../components/About';
import Parallax from '../components/Parallax';
import BlogPosts from '../components/BlogPosts';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>CPPU - Cursinho Popular Pimentas Unifesp</title>
        <meta name="description" content="Preparando jovens para ingressar no ensino superior com qualidade e acessibilidade" />
      </Head>
      
      <main>
        <Hero />
        <About />
        <Parallax 
          imageUrl="parallax-education.jpg"
          title="Transformando vidas através da educação"
          subtitle="Já ajudamos mais de 200 estudantes a realizarem o sonho de ingressar na universidade"
        />
        <Map />
        <BlogPosts />
        <ContactForm />
      </main>
    </>
  );
}