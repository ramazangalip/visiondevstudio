"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react'; // Link ikonu için

// Ortak renk paleti
const colors = {
  primary: '#00BFFF',
  background: '#140A30', // Ana arka plan
  text: '#E0E0E0',
  surface: '#1E143F', // Kartların arka planı (koyu)
  darkSurface: '#120B2A',
};

// --- Örnek Proje Verileri (Aynı Kalır) ---
type ProjectType = 'Hepsi' | 'Web' | 'Mobil' | 'Masaüstü';

interface Project {
  id: number;
  title: string;
  category: ProjectType;
  description: string;
  imageUrl: string; 
  tagColor: string; 
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    category: 'Web',
    description: "Modernized a leading online retail platform, improving user experience and increasing conversion rates by 25%.",
    imageUrl: "https://placehold.co/600x400/1E143F/00BFFF?text=E-commerce+Web",
    tagColor: 'text-blue-400',
  },
  {
    id: 2,
    title: "Secure Mobile Banking App",
    category: 'Mobil',
    description: "Developed a secure and intuitive mobile banking application, offering seamless financial management on the go.",
    imageUrl: "https://placehold.co/600x400/1E143F/00BFFF?text=Mobile+Banking",
    tagColor: 'text-green-400',
  },
  {
    id: 3,
    title: "Enterprise Data Dashboard",
    category: 'Masaüstü',
    description: "Created a powerful desktop dashboard for real-time data visualization and analytics for a major enterprise client.",
    imageUrl: "https://placehold.co/600x400/1E143F/00BFFF?text=Desktop+Dashboard",
    tagColor: 'text-yellow-400',
  },
  {
    id: 4,
    title: "Smart Home Control System",
    category: 'Mobil',
    description: "Designed and implemented an intuitive mobile application to control smart home devices and automate routines.",
    imageUrl: "https://placehold.co/600x400/1E143F/00BFFF?text=Smart+Home+App",
    tagColor: 'text-green-400',
  },
  {
    id: 5,
    title: "Custom CRM Solution",
    category: 'Web',
    description: "Developed a bespoke CRM system to streamline customer interactions and sales processes for a growing startup.",
    imageUrl: "https://placehold.co/600x400/1E143F/00BFFF?text=CRM+Web+App",
    tagColor: 'text-blue-400',
  },
  {
    id: 6,
    title: "Warehouse Inventory System",
    category: 'Masaüstü',
    description: "Built a comprehensive desktop application for efficient warehouse inventory management and logistics optimization.",
    imageUrl: "https://placehold.co/600x400/1E143F/00BFFF?text=Inventory+Desktop",
    tagColor: 'text-yellow-400',
  },
];


const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType>('Hepsi');

  const filteredProjects = activeFilter === 'Hepsi' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);
    
  const filterTabs: ProjectType[] = ['Hepsi', 'Web', 'Mobil', 'Masaüstü'];

  return (
    // min-h-screen ve üstten dolgu (pt-20) ile alt bölümlere geçişi güvenli hale getiriyoruz.
    <div className={`min-h-screen flex flex-col justify-center pt-20 pb-20 bg-[${colors.background}] text-[${colors.text}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Başlık ve Slogan */}
        <header className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white mb-3">
            Yaptığımız Bazı Projeler
          </h2>
        
        </header>
        
        {/* Filtreleme Butonları */}
        <div className="flex justify-center space-x-4 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-6 py-2 rounded-lg text-lg font-semibold transition duration-300
                          ${activeFilter === tab ? `bg-[${colors.primary}] text-white shadow-lg` : `bg-[${colors.surface}] text-[${colors.text}] hover:bg-[${colors.darkSurface}]`}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Proje Kartları */}
        {/* max-h-[65vh] ve overflow-y-auto ile kartlar kaydırılabilir yapılır */}
        {/* Not: Bu kaydırılabilir alan, Portföy içeriğinin ekranı çok fazla uzatmasını engeller. */}
        <div className="grid md:grid-cols-3 gap-8 overflow-y-auto max-h-[65vh] pr-4"> 
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`relative rounded-xl shadow-2xl bg-[${colors.surface}] overflow-hidden 
                          transition duration-500 transform hover:scale-[1.03]`}
            >
              {/* Proje Görsel Alanı */}
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src={project.imageUrl} 
                  alt={project.title} 
                  layout="fill"
                  objectFit="cover"
                  unoptimized={true} // SVG hatasını gidermek için
                  className="transition duration-500 opacity-90 hover:opacity-100"
                />
                {/* Kategori Etiketi */}
                <span className={`absolute top-3 left-3 px-3 py-1 text-sm font-semibold rounded-full bg-[${colors.darkSurface}] ${project.tagColor}`}>
                  {project.category} Geliştirme
                </span>
              </div>
              
              {/* Proje İçeriği */}
              <div className="p-5">
                <h3 className={`text-2xl font-bold mb-2 text-[${colors.primary}]`}>
                  {project.title}
                </h3>
                <p className={`text-sm text-[${colors.text}] leading-relaxed`}>
                  {project.description}
                </p>
                
               
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;