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
    // DÜZELTME: h-screen yerine min-h-screen kullanılıyor
    // Ayrıca üstten dolgu (pt-20) eklenerek Navbar'ın altından başlanması sağlanıyor.
    <div className={`min-h-screen flex flex-col justify-center pt-20 pb-20 bg-[${colors.background}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Başlık ve Slogan */}
        <header className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-3">
            Bizim <span className={`text-[${colors.primary}]`}>Hakkımızda</span>
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
              <span className={`font-semibold text-[${colors.primary}]`}>VisionDevStudio olarak, dijital dünyada fark yaratmak isteyen işletmeler ve bireyler için yenilikçi yazılım çözümleri üretiyoruz.</span> Her projenin kendine özgü ihtiyaçlarını derinlemesine anlayarak, mobil uygulamalardan kurumsal web sitelerine, özel masaüstü yazılımlarından modern e-ticaret platformlarına kadar geniş bir yelpazede hizmet sunmaktayız.
            </p>
            
            {/* 2. Paragraf */}
            <p className={`text-lg leading-relaxed text-[${colors.text}]`}>
              <span className={`font-semibold text-[${colors.primary}]`}>Teknolojiyi sadece takip etmekle kalmıyor, aynı zamanda ona yön veriyoruz.</span> Alanında uzman ve dinamik ekibimiz, en güncel teknolojileri ve en iyi yazılım geliştirme pratiklerini kullanarak, müşterilerimize sadece bir yazılım değil, aynı zamanda geleceğe yönelik sürdürülebilir bir dijital çözüm sunar.
            </p>
             {/* 3. Paragraf */}
              <p className={`text-lg leading-relaxed text-[${colors.text}]`}>
              <span className={`font-semibold text-[${colors.primary}]`}>Güven ve şeffaflık, işimizin temelini oluşturur.</span>Projelerimizin her aşamasında müşterilerimizle yakın iletişimde kalarak, beklentileri aşan sonuçlar elde etmeyi hedefleriz. Vizyonunuzu gerçeğe dönüştürmek, iş süreçlerinizi optimize etmek ve dijitalde sağlam bir yer edinmek için VisionDevStudio olarak her zaman yanınızdayız.
            </p>
          </div>
          
          {/* Sağ Taraf: Ofis Görseli */}
          <div className="md:order-2 flex justify-center items-center">
            {/* Görsel taslağınızdaki gibi modern bir ofis görseli yer tutucusu */}
            <div className={`w-full max-w-lg overflow-hidden rounded-xl shadow-2xl border border-[${colors.primary}]/30`}>
              <Image 
                src="/about.png" // Lütfen gerçek ofis görselinizle değiştirin
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