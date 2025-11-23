"use client";

import React from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, Github, Dribbble, Facebook } from 'lucide-react';

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
        { name: 'Home', id: 'home' },
        { name: 'About Us', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Portfolio', id: 'portfolio' },
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
                            <a href="#" aria-label="LinkedIn" className={`text-white/60 hover:text-[${colors.primary}] transition`}><Linkedin className="w-5 h-5" /></a>
                            <a href="#" aria-label="GitHub" className={`text-white/60 hover:text-[${colors.primary}] transition`}><Github className="w-5 h-5" /></a>
                            <a href="#" aria-label="Twitter" className={`text-white/60 hover:text-[${colors.primary}] transition`}><Twitter className="w-5 h-5" /></a>
                            {/* Diğer sosyal medya ikonları eklenebilir */}
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
                            <li>Mobile App Development</li>
                            <li>Web Application Development</li>
                            <li>Desktop Software</li>
                            <li>UX/UI Design</li>
                        </ul>
                    </div>
                    
                    {/* İletişim Bilgileri */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-lg font-semibold text-white mb-4">Bize Ulaşın</h3>
                        <p className="text-sm text-white/70">info@visiondevstudio.com</p>
                        <p className="text-sm text-white/70">+90 555 123 45 67</p>
                        <p className="text-sm text-white/70 mt-2">Istanbul, Turkey</p>
                    </div>

                </div>
                
                {/* Telif Hakkı */}
                <div className="text-center text-sm text-white/50">
                    &copy; {currentYear} VisionDevStudio. All rights reserved. | Developed with Next.js & Tailwind CSS.
                </div>
            </div>
        </footer>
    );
};

export default Footer;