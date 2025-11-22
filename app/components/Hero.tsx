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
    <div className={`h-screen flex items-center pt-20 bg-[${colors.secondaryBackground}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Sol Taraf: Metinler ve CTA */}
        <div className="md:order-1">
          {/* Ana Başlık */}
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6">
            Innovate.<br />
            Develop.<br />
            Succeed.
          </h1>
          
          {/* Alt Metin */}
          <p className={`text-xl font-light text-[${colors.text}] max-w-lg mb-10`}>
            Crafting cutting-edge mobile, web, and desktop applications that drive progress and deliver unparalleled user experiences.
          </p>
          
          {/* CTA Butonu - Explore Our Solutions */}
          <button
            onClick={scrollToServices} // Services ID'sine yönlendirir
            // YENİ BUTON ARKA PLAN RENGİ: Daha açık mavi
            className={`px-8 py-3 rounded-lg text-lg font-semibold text-white bg-[${colors.buttonBase}] 
                        hover:bg-[${colors.buttonHover}] transition duration-300 
                        shadow-lg shadow-[rgba(51,212,255,0.6)] hover:shadow-2xl hover:shadow-[rgba(0,191,255,0.7)]`}
          >
            Explore Our Solutions
          </button>
        </div>
        
        {/* Sağ Taraf: Görsel */}
        <div className="md:order-2 h-full hidden md:flex items-center justify-center">
          <Image src="/image2.png" alt='resim' width={600} height={600}></Image>
        </div>

      </div>
    </div>
  );
};

export default Hero;