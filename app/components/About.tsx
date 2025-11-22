"use client";

import React from 'react';
import Image from 'next/image';
import { LucideQuote, LucideTarget, LucideRocket, LucideUsers } from 'lucide-react'; // İkonlar için

// Logo renklerine uyumlu renk paleti (page.tsx'ten alınmıştır)
const colors = {
  primary: '#00BFFF',
  background: '#140A30', // Ana arka plan
  text: '#E0E0E0',
  surface: '#1E143F', // Bölüm kartları için hafif farklı bir yüzey
};

const About: React.FC = () => {
  return (
    // h-screen: Tam ekran yüksekliği
    // py-20: Üstten ve alttan boşluk
    <div className={`h-screen flex flex-col justify-center py-20 bg-[${colors.background}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Başlık ve Slogan */}
        <header className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-3">
            About <span className={`text-[${colors.primary}]`}>VisionDevStudio</span>
          </h2>
          <p className={`text-xl font-light text-[${colors.text}] max-w-3xl mx-auto`}>
            We are a team of dedicated developers and designers passionate about bringing innovative ideas to life through robust and intuitive software solutions.
          </p>
        </header>

        {/* Ana İçerik: Metin ve Görsel */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Sol Taraf: Metin Blokları */}
          <div className="space-y-6 md:order-1">
            
            {/* 1. Paragraf */}
            <p className={`text-lg leading-relaxed text-[${colors.text}]`}>
              <span className={`font-semibold text-[${colors.primary}]`}>Founded on the principles of excellence and innovation,</span> VisionDevStudio specializes in creating bespoke applications across all major platforms. Our agile approach ensures that we deliver high-quality software that aligns perfectly with your business goals and user needs. From initial concept to deployment and beyond, we are your trusted partner in digital transformation.
            </p>
            
            {/* 2. Paragraf */}
            <p className={`text-lg leading-relaxed text-[${colors.text}]`}>
              Our commitment to staying ahead of technological trends means your projects are built with the latest frameworks and best practices, ensuring scalability, security, and performance. We believe in transparent communication and collaborative development, making your vision our priority.
            </p>
            
          </div>
          
          {/* Sağ Taraf: Ofis Görseli */}
          <div className="md:order-2 flex justify-center items-center">
            {/* Görsel taslağınızdaki gibi modern bir ofis görseli yer tutucusu */}
            <div className={`w-full max-w-lg overflow-hidden rounded-xl shadow-2xl border border-[${colors.primary}]/30`}>
              <Image 
                src="/ofis2.png" // Lütfen gerçek ofis görselinizle değiştirin
                alt="VisionDevStudio Modern Office Space" 
                width={600}
                height={450}
                layout="responsive"
                className="object-cover transition duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default About;