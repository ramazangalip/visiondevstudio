"use client";
import React from 'react';
import Image from 'next/image'; 

// Navigasyon öğeleri için tip tanımı
interface NavItem {
  name: string;
  id: string;
}

// Navigasyon linkleri ve hedef bölümlerin ID'leri
const navItems: NavItem[] = [
  { name: 'Anasayfa', id: 'home' },
  { name: 'Hakkımızda', id: 'about' },
  { name: 'Paketlerimiz', id: 'services' },
  { name: 'Yaptığımız Projeler', id: 'portfolio' },
  { name: 'İletişim', id: 'contact' },
];

const Navbar: React.FC = () => {
  // Anchor link'e tıklandığında yumuşak geçiş (smooth scroll) sağlar
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // TypeScript'te scrollIntoView'un varlığını kontrol ediyoruz
      if (typeof element.scrollIntoView === 'function') {
         element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Renk Paleti (Tailwind sınıfları yerine kullanmak için)
  const colors = {
    primary: '#00BFFF',
    background: '#0A0A1F',
    surface: '#1C1C3A',
    text: '#E0E0E0',
  };

  return (
    // Arka plan koyu lacivert, sabit (fixed) ve tam genişlikte
    <nav className={`fixed w-full z-50 bg-[${colors.background}]/90 backdrop-blur-sm shadow-lg shadow-black/30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Alanı */}
          <div className="flex items-center">
            {/* LOGO GÖRSELİNİZİ BURAYA EKLEYİN */}
            <div className="flex-shrink-0 mr-4">
              {/* Not: Gerçek projede 'src' kısmına dosya yolunu yazmalısınız */}
              <Image 
                src="/logos.png" // Lütfen yolu güncelleyin
                alt="VisionDevStudio Logo" 
                width={120} 
                height={140} 
                className="rounded-lg"
              />
            </div>
            
         
          </div>
          
          {/* Menü Linkleri */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium text-[${colors.text}] transition duration-300 cursor-pointer 
                  // Varsayılan olarak Home aktif görünüyor
                  ${item.name === 'Home' ? `bg-[${colors.primary}] text-white` : `hover:bg-[${colors.surface}] hover:text-[${colors.primary}]`}`}
                  aria-current={item.name === 'Home' ? 'page' : undefined}
                  role="button" // Erişilebilirlik için
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;