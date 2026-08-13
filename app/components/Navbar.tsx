"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: 'Anasayfa', id: 'home' },
  { name: 'Hakkımızda', id: 'about' },
  { name: 'Paketlerimiz', id: 'services' },
  { name: 'Yaptığımız Projeler', id: 'portfolio' },
  { name: 'İletişim', id: 'contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element && typeof element.scrollIntoView === 'function') {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-[#140A30]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="flex items-center cursor-pointer group"
          >
            <Image 
              src="/logos.png" 
              alt="VisionDevStudio Logo" 
              width={130} 
              height={50} 
              className="rounded-lg object-contain transition-transform group-hover:scale-105"
            />
          </div>
          
          {/* Masaüstü Menü Linkleri */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-[#E0E0E0] hover:text-[#00BFFF] hover:bg-[#1E143F] transition-all duration-200 cursor-pointer"
                role="button"
              >
                {item.name}
              </a>
            ))}
            
            {/* CTA Butonu */}
            <a
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#33D4FF] hover:bg-[#00BFFF] transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(0,191,255,0.5)] cursor-pointer"
            >
              Teklif Alın
            </a>
          </div>

          {/* Mobil Hamburger Butonu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-white bg-[#1E143F] border border-white/10 hover:border-[#00BFFF] focus:outline-none transition-colors"
              aria-label="Menüyü Aç/Kapat"
            >
              {isOpen ? <X className="w-6 h-6 text-[#00BFFF]" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobil Açılır Menü (Drawer) */}
      {isOpen && (
        <div className="md:hidden bg-[#1E143F] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-[#E0E0E0] hover:text-white hover:bg-[#120B2A] transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-[#33D4FF] hover:bg-[#00BFFF] shadow-lg shadow-[rgba(51,212,255,0.3)] transition-all cursor-pointer"
            >
              Hemen Teklif Alın
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;