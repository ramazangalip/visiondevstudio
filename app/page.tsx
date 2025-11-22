import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export default function Home() {
  // Renkleri burada tanımlayabilir veya doğrudan Tailwind sınıf isimlerini kullanabilirsiniz.
  const colors = {
    primary: '#00BFFF',
    background: '#0A0A1F',
    text: '#E0E0E0',
  };
  return (
    // 'flex items-center justify-center' sınıflarını kaldırıyoruz.
    // 'min-h-screen' ve koyu arka planı uyguluyoruz.
    <div className={`bg-[${colors.background}] min-h-screen text-[${colors.text}]`}>
      
      {/* Navbar sabit (fixed) olduğu için en üste yerleşecektir */}
      <Navbar />
     <section id="home"> 
        <Hero /> 
      </section>
        <section id="about">
        <About /> 
      </section>
       {/* 3. Services Bölümü - Tam ekranı kaplar */}
      <section id="services">
        <Services /> {/* Services bileşenini ekliyoruz */}
      </section>
       {/* 4. Portfolio Bölümü - Tam ekranı kaplar */}
      <section id="portfolio">
        <Portfolio /> {/* Portfolio bileşenini ekliyoruz */}
      </section>
    </div>
  );
}
