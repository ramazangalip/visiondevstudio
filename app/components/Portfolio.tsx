"use client";

import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

// Ortak renk paleti (ORİJİNAL TASARIM KORUNDU)
const colors = {
  primary: '#00BFFF', // Açık Mavi
  background: '#140A30', // Ana arka plan (Koyu Mor/Mavi)
  text: '#E0E0E0', // Açık Gri Metin
  surface: '#1E143F', // Kartların arka planı (Daha az koyu mor)
  darkSurface: '#120B2A', // Etiket arka planı
};

// --- Tek Proje Verisi (Görsel Yolu Güncellendi) ---
interface Project {
  id: number;
  title: string;
  category: 'Web'; 
  description: string;
  imageUrl: string; // Yerel yol: /ararat.png
  tagColor: string; 
  liveLink: string; 
}

const theOnlyWebProject: Project[] = [
  {
    id: 1,
    title: "Ararat Token",
    category: 'Web',
    description: "Modern Tanıtım Sitesi, Blokzincir teknolojisi ve topluluk yönetimine odaklanmıştır.",
   
    imageUrl: "/ararat.png", 
    tagColor: 'text-blue-400',
    liveLink: "https://www.ararattoken.com", 
  },
];


const Portfolio: React.FC = () => {

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center py-20 bg-[${colors.background}] text-[${colors.text}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Başlık ve Slogan */}
        <header className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white mb-3">
            Yaptığımız Bazı Projeler
          </h2>
        </header>
        
        {/* Proje Kartları */}
        <div className="flex justify-center">
          {theOnlyWebProject.map((project) => (
            <div 
              key={project.id} 
              className={`max-w-md relative rounded-xl shadow-2xl bg-[${colors.surface}] overflow-hidden 
                          transition duration-500 transform hover:scale-[1.03]`}
            >
              
              {/* Proje Görsel Alanı */}
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  // Yerel resim kullanırken width ve height belirtmek performansı artırır.
                  // layout="fill" kullanıyorsanız, container'a height vermeyi unutmayın (yukarıda h-48 var).
                  layout="fill"
                  objectFit="cover"
                  // unoptimized'ı kaldırdım, çünkü yerel dosyalar için optimize edilmesi daha iyidir.
                  className="transition duration-500 opacity-90 hover:opacity-100"
                />
               
              </div>
              
              {/* Proje İçeriği */}
              <div className="p-5">
                <h3 className={`text-2xl font-bold mb-2 text-[${colors.primary}]`}>
                  {project.title}
                </h3>
                <p className={`text-sm text-[${colors.text}] leading-relaxed mb-4`}>
                  {project.description}
                </p>
                
                {/* Canlı Proje Linki Butonu */}
                 <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center text-md font-semibold text-white 
                              hover:text-[${colors.primary}] transition duration-300`}
                >
                  Canlı Siteyi Gör <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;