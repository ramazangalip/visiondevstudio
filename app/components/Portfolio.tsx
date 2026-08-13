"use client";

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Globe, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  tags: string[];
}

const projectsList: Project[] = [
  {
    id: 1,
    title: "Ararat Token",
    category: "Web & Blokzincir",
    description: "Next.js & React altyapısıyla geliştirilen, ışık hızında çalışan performans odaklı kurumsal web sitesi ve blokzincir tanıtım platformu.",
    imageUrl: "/ararat.png",
    liveLink: "https://ararattoken.com/",
    tags: ["Next.js", "React", "Web3", "SEO"],
  },
  {
    id: 2,
    title: "Mavimor Güzellik Merkezi",
    category: "Kurumsal Web",
    description: "Next.js & React teknolojileri ile hazırlanan, Bingöl Lazer Epilasyon ve Cilt Bakımı kurumsal hizmet ve randevu platformu.",
    imageUrl: "/mavimor.png",
    liveLink: "https://mavimorguzelliksalonu.com.tr/",
    tags: ["Next.js", "React", "Kurumsal", "UI/UX"],
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-[#140A30] text-[#E0E0E0] relative overflow-hidden">
      {/* Arka Plan Glow Efekti */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#00BFFF]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Başlık Bölümü */}
        <header className="text-center mb-14 sm:mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#00BFFF] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seçkin Çalışmalarımız</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Yaptığımız <span className="text-[#00BFFF] drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]">Başarılı Projeler</span>
          </h2>
          
          <p className="text-base sm:text-xl font-light text-[#E0E0E0]/80 max-w-2xl mx-auto leading-relaxed">
            Modern mühendislik standartları, estetik tasarım dili ve yüksek performanslı mimariler ile hayata geçirdiğimiz referans projelerimiz.
          </p>
        </header>
        
        {/* Tüm Ekran Boyutlarına %100 Uyumlu Proje Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {projectsList.map((project) => (
            <article 
              key={project.id} 
              className="group relative bg-[#1E143F]/90 backdrop-blur-md rounded-2xl border border-[#00BFFF]/20 hover:border-[#00BFFF] transition-all duration-500 shadow-2xl hover:shadow-[0_0_35px_rgba(0,191,255,0.25)] flex flex-col justify-between overflow-hidden transform hover:-translate-y-1.5 h-full"
            >
              
              <div>
                {/* Tarayıcı Çerçevesi Mockup (Browser Window Display) */}
                <div className="bg-[#120B2A] border-b border-white/10 px-3.5 py-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-1.5 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>

                  {/* Adres Çubuğu Simülasyonu */}
                  <div className="flex-grow max-w-[220px] sm:max-w-[280px] px-3 py-1 rounded-md bg-[#1E143F] text-[11px] text-white/60 flex items-center justify-center space-x-1.5 truncate border border-white/5">
                    <Globe className="w-3 h-3 text-[#00BFFF] shrink-0" />
                    <span className="truncate font-mono">{project.liveLink.replace("https://", "").replace(/\/$/, "")}</span>
                  </div>

                  <div className="shrink-0">
                    <span className="text-[10px] uppercase font-bold text-[#00BFFF] bg-[#00BFFF]/10 border border-[#00BFFF]/20 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Görsel Alanı: Tam Sığan Kırpılmayan Ekran Görüntüsü */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-[#0A061C] p-2 sm:p-3 overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-inner">
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain sm:object-cover sm:object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
              
              {/* İçerik Bilgileri */}
              <div className="p-6 sm:p-7 flex flex-col justify-between space-y-6 flex-grow">
                <div className="space-y-3">
                  {/* Rozetler (Tags) */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#120B2A] text-[#33D4FF] border border-[#00BFFF]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Başlık */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00BFFF] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Açıklama */}
                  <p className="text-sm text-[#E0E0E0]/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Canlı Site Butonu */}
                <div className="pt-2">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#120B2A] border border-[#00BFFF]/40 hover:bg-[#33D4FF] hover:text-white hover:border-[#33D4FF] active:scale-95 transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(51,212,255,0.4)]"
                  >
                    <span>Canlı Sitede İnceleyin</span>
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

              </div>

            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Portfolio;