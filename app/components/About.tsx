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
            Modern web ve mobil teknolojilerle ölçeklenebilir, performans odaklı ve yüksek güvenlikli kurumsal yazılım çözümleri inşa ediyoruz.
          </p>
        </header>

        {/* Ana İçerik: Metin ve Görsel */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Sol Taraf: Metin Blokları */}
          <div className="space-y-6 md:order-1">
            
            {/* 1. Paragraf */}
            <p className={`text-lg leading-relaxed text-[${colors.text}]`}>
              <span className={`font-semibold text-[${colors.primary}]`}>VisionDevStudio olarak, dijital dönüşümde fark yaratmak isteyen işletmeler için terzi usulü yazılım çözümleri sunuyoruz.</span> Web ön yüzünde **React** ve **Next.js**, arka planda ise mimari gücüyle öne çıkan **Python Django** teknolojilerini kullanarak uçtan uca yüksek performanslı **kurumsal web sitesi tasarımları** ve özel yazılım altyapıları geliştiriyoruz.
            </p>
            
            {/* 2. Paragraf */}
            <p className={`text-lg leading-relaxed text-[${colors.text}]`}>
              <span className={`font-semibold text-[${colors.primary}]`}>Mobil dünyada sınırları kaldırıyoruz.</span> **Flutter** ve **React Native** teknolojilerimiz sayesinde hem iOS hem de Android platformlarında yerel (native) performanslı cross-platform mobil uygulamalar sunuyoruz. Sürdürülebilir mimari, şeffaf süreç yönetimi ve tam kapsamlı yazılım ajansı kimliğimizle projelerinize hız ve değer katıyoruz.
            </p>
             {/* 3. Paragraf */}
              <p className={`text-lg leading-relaxed text-[${colors.text}]`}>
              <span className={`font-semibold text-[${colors.primary}]`}>Güven, şeffaflık ve performans temel ilkemizdir.</span> Özel e-ticaret altyapılarından süreç optimizasyon otomasyonlarına kadar işletmenizin tüm dijital varlıklarını modern kod standartlarıyla üretiyor, sürdürülebilir başarı için yanınızda oluyoruz.
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