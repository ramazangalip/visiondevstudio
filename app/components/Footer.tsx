"use client";

import React from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, Github, Dribbble, Facebook, Instagram } from 'lucide-react';

// Ortak renk paleti
const colors = {
  primary: '#00BFFF',
  background: '#140A30', 
  text: '#E0E0E0',
  surface: '#1E143F', // Footer için biraz daha koyu arkaplan
};

const Footer: React.FC = () => {
    // CTA butonuna tıklandığında ilgili bölüme yumuşak kaydırma
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element && typeof element.scrollIntoView === 'function') {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const currentYear = new Date().getFullYear();

    const navItems = [
        { name: 'Anasayfa', id: 'home' },
        { name: 'Hakkımızda', id: 'about' },
        { name: 'Paketler', id: 'services' },
        
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <footer className={`bg-[${colors.surface}] text-[${colors.text}] py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 border-b border-white/10 pb-8 mb-8">
                    
                    {/* Marka ve Sosyal Medya */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center mb-4">
                            <Image 
                                src="/logos.png" // Lütfen yolu güncelleyin
                                alt="VisionDevStudio Logo" 
                                width={30} 
                                height={30} 
                                className="rounded-lg mr-3"
                            />
                            <span className={`text-xl font-bold text-[${colors.primary}]`}>VisionDevStudio</span>
                        </div>
                        <p className="text-sm text-white/70 mb-4">Innovate. Develop. Succeed.</p>
                        <div className="flex space-x-3">
                            <a href="https://www.instagram.com/visiondevstudio/" aria-label="Instangram" className={`text-white/60 hover:text-[${colors.primary}] transition`}><Instagram className="w-5 h-5" /></a>
                            
                            
                        </div>
                    </div>

                    {/* Hızlı Linkler */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Hızlı Erişim</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a 
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-sm text-white/70 hover:text-[${colors.primary}] transition cursor-pointer`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hizmetler (Kısa) */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Çözümlerimiz</h3>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>Mobile Uygulama Geliştirme</li>
                            <li>Web Sitesi Geliştirme</li>
                            <li>Masaüstü Geliştirme</li>
                        </ul>
                    </div>
                    
                    {/* İletişim Bilgileri */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Bize Ulaşın</h3>
                        <p className="text-sm text-white/70">info@visiondevstudio.com.tr</p>
                        
                        <p className="text-sm text-white/70 mt-2">Bingöl, Turkey</p>
                    </div>

                </div>
                
                {/* Telif Hakkı */}
                <div className="text-center text-sm text-white/50">
                    &copy; {currentYear} VisionDevStudio. Tüm Hakları Saklıdır | 
                </div>
            </div>
        </footer>
    );
};

export default Footer;