"use client"; // Etkileşimli buton için Client Component olmalı

import React from 'react';
import Image from 'next/image';

// Logo renklerine uyumlu renk paleti
const colors = {
  primary: '#00BFFF',
  secondaryBackground: '#140A30', // Koyu mor-mavi arka plan
  text: '#E0E0E0',
  // YENİ BUTON RENKLERİ:
  buttonBase: '#33D4FF', // Daha açık mavi (Varsayılan Buton Rengi)
  buttonHover: '#00BFFF', // Eski ana renk (Hover Rengi)
};
const Hero: React.FC = () => {
  // CTA butonuna tıklandığında "services" bölümüne yumuşak kaydırma
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // YÜKSEKLİK DÜZELTMESİ: h-screen (Tam Viewport Yüksekliği) ve Navbar için pt-20
    <div className={`h-screen flex items-center pt-40 bg-[${colors.secondaryBackground}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Sol Taraf: Metinler ve CTA */}
        <div className="md:order-1">
          {/* Ana Başlık (H1) */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-6">
            Geleceğin Teknolojilerini İnşa Eden <span className={`text-[${colors.primary}]`}>Özel Yazılım Geliştirme Ajansı</span>
          </h1>
          
          {/* Alt Metin / Slogan */}
          <p className={`text-xl font-light text-[${colors.text}] max-w-lg mb-10 leading-relaxed`}>
            VisionDevStudio ile tanışın. Modern teknoloji mimarimiz ile iş süreçlerinizi dijitalleştiriyor; mobil, web ve masaüstü platformlarında sektörünüzde rekabet avantajı sağlayan kurumsal yazılım çözümleri sunuyoruz.
          </p>
          
          {/* CTA Butonu */}
          <button
            onClick={scrollToServices}
            className={`px-8 py-4 rounded-lg text-lg font-semibold text-white bg-[${colors.buttonBase}] 
                        hover:bg-[${colors.buttonHover}] transition duration-300 
                        shadow-lg shadow-[rgba(51,212,255,0.6)] hover:shadow-2xl hover:shadow-[rgba(0,191,255,0.7)]`}
          >
            Çözümlerimizi Keşfedin & Teklif Alın
          </button>
        </div>
        
        {/* Sağ Taraf: Görsel */}
        <div className="md:order-2 h-full hidden md:flex items-center justify-center">
          <Image src="/image2.png" alt="VisionDevStudio Özel Yazılım Geliştirme" width={600} height={600}></Image>
        </div>

      </div>
    </div>
  );
};

export default Hero;