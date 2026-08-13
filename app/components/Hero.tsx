"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element && typeof element.scrollIntoView === 'function') {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-28 pb-16 md:pt-36 md:pb-24 bg-[#140A30] text-[#E0E0E0] relative overflow-hidden">
      {/* Arka Plan Glow Efekti */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#00BFFF]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#1E143F]/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 w-full">
        
        {/* Sol Taraf: Metinler ve CTA */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#00BFFF] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Geleceğin Yazılım Teknolojisi</span>
          </div>

          {/* Ana Başlık (H1) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Geleceğin Teknolojilerini İnşa Eden <span className="text-[#00BFFF] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">Özel Yazılım Ajansı</span>
          </h1>
          
          {/* Alt Metin / Slogan */}
          <p className="text-base sm:text-xl font-light text-[#E0E0E0]/80 max-w-xl mx-auto md:mx-0 leading-relaxed">
            VisionDevStudio ile tanışın. Modern teknoloji mimarimiz ile iş süreçlerinizi dijitalleştiriyor; mobil, web ve masaüstü platformlarında sektörünüzde rekabet avantajı sağlayan kurumsal yazılım çözümleri sunuyoruz.
          </p>
          
          {/* CTA Butonları */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-[#33D4FF] hover:bg-[#00BFFF] active:scale-95 transition-all duration-300 shadow-lg shadow-[rgba(51,212,255,0.4)] hover:shadow-xl hover:shadow-[rgba(0,191,255,0.6)] flex items-center justify-center cursor-pointer"
            >
              <span>Çözümlerimizi Keşfedin</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
        
        {/* Sağ Taraf: Görsel */}
        <div className="flex items-center justify-center relative">
          <div className="relative w-full max-w-lg aspect-square">
            <Image 
              src="/image2.png" 
              alt="VisionDevStudio Özel Yazılım Geliştirme" 
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_0_40px_rgba(0,191,255,0.2)] animate-pulse-slow"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;