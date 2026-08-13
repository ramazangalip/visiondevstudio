"use client";

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#140A30] text-[#E0E0E0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Başlık ve Slogan */}
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bizim <span className="text-[#00BFFF] drop-shadow-[0_0_15px_rgba(0,191,255,0.4)]">Hakkımızda</span>
          </h2>
          <p className="text-base sm:text-xl font-light text-[#E0E0E0]/80 max-w-3xl mx-auto leading-relaxed">
            Modern web ve mobil teknolojilerle ölçeklenebilir, performans odaklı ve yüksek güvenlikli kurumsal yazılım çözümleri inşa ediyoruz.
          </p>
        </header>

        {/* Ana İçerik: Metin ve Görsel */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Sol Taraf: Metin Blokları */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg leading-relaxed text-[#E0E0E0]/90">
              <span className="font-semibold text-[#00BFFF]">VisionDevStudio olarak, dijital dönüşümde fark yaratmak isteyen işletmeler için terzi usulü yazılım çözümleri sunuyoruz.</span> Web ön yüzünde <strong className="text-white">React</strong> ve <strong className="text-white">Next.js</strong>, arka planda ise mimari gücüyle öne çıkan <strong className="text-white">Python Django</strong> teknolojilerini kullanarak uçtan uca yüksek performanslı <strong className="text-white">kurumsal web sitesi tasarımları</strong> ve özel yazılım altyapıları geliştiriyoruz.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-[#E0E0E0]/90">
              <span className="font-semibold text-[#00BFFF]">Mobil dünyada sınırları kaldırıyoruz.</span> <strong className="text-white">Flutter</strong> ve <strong className="text-white">React Native</strong> teknolojilerimiz sayesinde hem iOS hem de Android platformlarında yerel (native) performanslı cross-platform mobil uygulamalar sunuyoruz. Sürdürülebilir mimari, şeffaf süreç yönetimi ve tam kapsamlı yazılım ajansı kimliğimizle projelerinize hız ve değer katıyoruz.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-[#E0E0E0]/90">
              <span className="font-semibold text-[#00BFFF]">Güven, şeffaflık ve performans temel ilkemizdir.</span> Özel e-ticaret altyapılarından süreç optimizasyon otomasyonlarına kadar işletmenizin tüm dijital varlıklarını modern kod standartlarıyla üretiyor, sürdürülebilir başarı için yanınızda oluyoruz.
            </p>
          </div>
          
          {/* Sağ Taraf: Görsel */}
          <div className="flex justify-center items-center">
            <div className="w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl border border-[#00BFFF]/30 bg-[#1E143F]">
              <Image 
                src="/about.png" 
                alt="VisionDevStudio Modern Office Space" 
                width={600}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default About;