import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 

const Home: React.FC = () => {
  const colors = {
    // DÜZELTME: Ana arka plan rengini #140A30 olarak güncelliyoruz.
    background: '#140A30', // Ana arka plan (Koyu mor-mavi)
    primary: '#00BFFF',
    text: '#E0E0E0',
  };

  return (
    <div className={`bg-[${colors.background}] min-h-screen text-[${colors.text}]`}>
      
      <Navbar />
      
      {/* 1. Home (Anasayfa/Hero) Bölümü */}
      <section id="home"> 
        <Hero /> 
      </section> 

      {/* 2. About Us Bölümü */}
      <section id="about">
        <About /> 
      </section>
      
      {/* 3. Services Bölümü */}
      <section id="services">
        <Services /> 
      </section>
      
      {/* 4. Portfolio Bölümü */}
      {/* <section id="portfolio">
        <Portfolio /> 
      </section> */}
      
      {/* 5. Contact Bölümü */}
      <section id="contact">
        <Contact /> 
      </section>
      
      {/* 6. Footer Bölümü - Sayfanın En Altı */}
      <Footer /> 
    </div>
  );
}

export default Home;