"use client";

import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
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
    { name: 'Paketlerimiz', id: 'services' },
    { name: 'Yaptığımız Projeler', id: 'portfolio' },
    { name: 'İletişim', id: 'contact' },
  ];

  return (
    <footer className="bg-[#120B2A] text-[#E0E0E0] py-14 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-b border-white/10 pb-10 mb-8">
          
          {/* Marka ve Sosyal Medya */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <Image 
                src="/logos.png" 
                alt="VisionDevStudio Logo" 
                width={120} 
                height={40} 
                className="rounded-lg object-contain"
              />
            </div>
            <p className="text-sm text-[#E0E0E0]/70 max-w-sm leading-relaxed">
              Özel yazılım geliştirme, mobil uygulama ve kurumsal web tasarımı çözümleri sunan tam kapsamlı yazılım ajansı.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/visiondevstudio/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="p-2.5 rounded-xl bg-[#1E143F] text-[#00BFFF] border border-white/10 hover:border-[#00BFFF] hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Hızlı Erişim</h3>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#E0E0E0]/70 hover:text-[#00BFFF] transition-colors cursor-pointer block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Çözümlerimiz</h3>
            <ul className="space-y-2.5 text-sm text-[#E0E0E0]/70">
              <li>Mobil Uygulama (iOS/Android)</li>
              <li>Kurumsal Web & E-Ticaret</li>
              <li>Masaüstü ERP/CRM Otomasyon</li>
            </ul>
          </div>
          
          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Bize Ulaşın</h3>
            <p className="text-sm text-[#33D4FF] break-all">
              <a href="mailto:ramazansaidgalip@gmail.com" className="hover:underline">
                ramazansaidgalip@gmail.com
              </a>
            </p>
            <p className="text-sm text-[#E0E0E0]/70">Bingöl, Türkiye</p>
          </div>

        </div>
        
        {/* Telif Hakkı */}
        <div className="text-center text-xs text-[#E0E0E0]/50 tracking-wide">
          &copy; {currentYear} VisionDevStudio. Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;