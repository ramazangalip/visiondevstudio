"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react'; // Onay işareti için Lucide ikonunu kullanacağız

// Ortak renk paleti (page.tsx'ten alınmıştır)
const colors = {
  primary: '#00BFFF',
  background: '#140A30', // Ana arka plan (Koyu mor-mavi)
  text: '#E0E0E0',
  surface: '#1E143F', // Kartların arka planı (biraz daha açık)
  darkSurface: '#120B2A',
  buttonBase: '#33D4FF',
  buttonHover: '#00BFFF',
};

// --- Paket Verileri (Aynı Kalır) ---
const packagesData = {
  mobile: {
    title: "MOBİL UYGULAMA PAKETLERİ",
    logo: "/logo.png", // Logoyu buraya ekleyin
    cards: [
      {
        type: "Giriş",
        price: "5.000₺",
        features: [
          "1 adet basit mobil uygulama",
          "3 ekrana kadar tasarım",
          "Temel backend bağlantısı",
          "1 hafta teslim süresi",
          "7 gün teknik destek"
        ]
      },
      {
        type: "Profesyonel",
        price: "7.000₺",
        features: [
          "Çok sayfalı uygulama",
          "Kullanıcı giriş sistemi",
          "Admin paneli",
          "Veri kaydı & listeleme",
          "2 hafta teslim",
          "1 ay destek"
        ],
        highlight: true // Bu kartı vurgulamak için
      },
      {
        type: "Üst",
        price: "10.000₺",
        features: [
          "Gelişmiş kurumsal uygulama",
          "Premium özellikler",
          "Ödeme sistemi",
          "Çoklu dil",
          "Push bildirim",
          "3 ay destek"
        ]
      },
    ]
  },
  web: {
    title: "WEB SİTESİ PAKETLERİ",
    logo: "/logo.png", // Logoyu buraya ekleyin
    cards: [
      {
        type: "Giriş",
        price: "5.000₺",
        features: [
          "1-3 sayfa kurumsal mini web sitesi",
          "Mobil uyumlu basit tasarım",
          "Hız optimizasyonu",
          "1 haftalık destek",
          "Hosting & domain yönlendirme"
        ]
      },
      {
        type: "Profesyonel",
        price: "8.000₺",
        features: [
          "Yönetim panelli web uygulaması (Admin)",
          "Kullanıcı kayıt sistemi",
          "Dinamik içerik (Blog, Ürün, Form, vb.)",
          "API entegrasyonu",
          "SEO temel ayarları",
          "1 ay teknik destek"
        ],
        highlight: true
      },
      {
        type: "Üst",
        price: "10.000₺",
        features: [
          "Gelişmiş web uygulaması",
          "Ödeme sistemi",
          "Çoklu dil (i18n)",
          "Dashboard + grafikler",
          "Gerçek zamanlı veri (WebSocket/Firebase)",
          "Kurumsal premium tasarım",
          "3 ay destek"
        ]
      },
    ]
  },
  desktop: {
    title: "MASAÜSTÜ UYGULAMA PAKETLERİ",
    logo: "/logo.png", // Logoyu buraya ekleyin
    cards: [
      {
        type: "Giriş",
        price: "4.500₺",
        features: [
          "Basit masaüstü arayüz",
          "Veri okuma / yazma işlemleri",
          "Temel form ekranları",
          "Offline çalışma",
          "1 hafta destek"
        ]
      },
      {
        type: "Profesyonel",
        price: "7.500₺",
        features: [
          "Çok ekranlı tam masaüstü uygulama",
          "Veritabanı desteği (SQLite / PostgreSQL)",
          "Kullanıcı giriş sistemi",
          "Raporlama modülleri",
          "API üzerinden veri alışverişi",
          "1 ay destek"
        ],
        highlight: true
      },
      {
        type: "Üst",
        price: "11.000₺",
        features: [
          "Kurumsal seviye masaüstü yazılım",
          "Gerçek zamanlı canlı veri (UPS, IOT cihaz, sensör vb.)",
          "Grafik + dashboard",
          "Çoklu kullanıcı rol yönetimi",
          "Veritabanı desteği (SQLite / PostgreSQL)",
          "3 ay profesyonel destek"
        ]
      }
    ]
  }
};

type PackageType = 'mobile' | 'web' | 'desktop';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PackageType>('mobile'); // Varsayılan olarak mobil aktif

  const currentPackage = packagesData[activeTab];

  // CTA butonuna tıklandığında "contact" bölümüne yumuşak kaydırma
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // min-h-screen ve üstten dolgu (pt-20) ile alt bölümlere geçişi güvenli hale getiriyoruz.
    <div className={`min-h-screen flex flex-col justify-between pt-20 pb-20 bg-[${colors.background}] text-[${colors.text}]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Ortadaki Logo */}
        <div className="flex justify-center mb-10 mt-10">
            <Image 
                src={currentPackage.logo} // Logoyu buraya ekleyin
                alt="VisionDevStudio Logo" 
                width={70} 
                height={70} 
                className="rounded-lg"
            />
        </div>

        {/* Başlık */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10">
          {currentPackage.title}
        </h2>

        {/* Tab Butonları */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.keys(packagesData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as PackageType)}
              className={`px-6 py-2 rounded-lg text-lg font-semibold transition duration-300
                          ${activeTab === key ? `bg-[${colors.primary}] text-white shadow-lg` : `bg-[${colors.surface}] text-[${colors.text}] hover:bg-[${colors.darkSurface}]`}`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)} {key === 'mobile' ? 'Uygulama' : key === 'web' ? 'Sitesi' : 'Uygulama'}
            </button>
          ))}
        </div>

        {/* Paket Kartları */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {currentPackage.cards.map((card, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-xl shadow-2xl flex flex-col h-full 
                          ${card.highlight 
                              ? `bg-[${colors.primary}] text-white border-2 border-white` // Vurguluya da border ekleniyor
                              : `bg-[${colors.surface}] border border-[${colors.primary}]/30 text-[${colors.text}]`
                            }`}
            >
              {card.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Popüler
                </span>
              )}
              <h3 className="text-3xl font-bold mb-4">{card.type}</h3>
              <p className={`text-5xl font-extrabold mb-6 ${card.highlight ? 'text-white' : `text-[${colors.primary}]`}`}>{card.price}</p>
              
              <ul className="space-y-3 flex-grow mb-8">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-lg">
                    <Check className={`w-5 h-5 mr-3 ${card.highlight ? 'text-white' : `text-[${colors.primary}]`}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* Buton (En altta sabit kalması için) */}
              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg text-lg font-semibold transition duration-300 
                            ${card.highlight 
                                // Vurgulu paketin butonu: Arka plan koyu yüzey, metin beyaz
                                ? `bg-[${colors.darkSurface}] text-white hover:bg-[${colors.surface}]` 
                                // Diğer paketlerin butonu: Arka plan koyu mor-mavi tonu, metin beyaz
                                : `bg-[${colors.darkSurface}] text-white hover:bg-[${colors.surface}]`
                            }`}
              >
                Hemen Teklif Alın
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* "Hayallerinizi Koda Dökelim!" kısmı sayfanın en altında ortalanmış */}
      <div className="text-center py-8">
        <p className={`text-3xl font-bold mb-6 text-[${colors.text}]`}>HAYALLERİNİZİ KODA DÖKELİM!</p>
        <button
          onClick={scrollToContact}
          // Arka planı koyu mor-maviye ayarlanıyor
          className={`px-10 py-4 rounded-lg text-xl font-bold text-white bg-[${colors.darkSurface}] 
                      hover:bg-[${colors.surface}] transition duration-300 
                      shadow-lg shadow-[rgba(51,212,255,0.6)] hover:shadow-2xl hover:shadow-[rgba(0,191,255,0.7)]`}
        >
          HEMEN TEKLİF ALIN
        </button>
      </div>
    </div>
  );
};

export default Services;