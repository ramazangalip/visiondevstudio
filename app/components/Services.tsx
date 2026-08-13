"use client";

import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const packagesData = {
  Mobil: {
    title: "MOBİL UYGULAMA GELİŞTİRME PAKETLERİ",
    cards: [
      {
        type: "Giriş",
        price: "5.000₺",
        features: [
          "Flutter / React Native cross-platform altyapı",
          "iOS ve Android uyumlu modern UI tasarım",
          "Python Django REST API temel bağlantısı",
          "1 hafta teslim süresi",
          "7 gün teknik destek"
        ]
      },
      {
        type: "Profesyonel",
        price: "7.000₺",
        features: [
          "Flutter / React Native çok sayfalı uygulama",
          "Python Django güvenli kullanıcı yetkilendirme",
          "Web tabanlı yönetim paneli (Admin)",
          "Push bildirim & veri listeleme entegrasyonu",
          "2 hafta teslim süresi",
          "1 ay ücretsiz destek"
        ],
        highlight: true
      },
      {
        type: "Üst",
        price: "10.000₺",
        features: [
          "Gelişmiş kurumsal cross-platform mobil uygulama",
          "Python Django mimarisi ile yüksek performanslı backend",
          "Ödeme sistemi & IAP entegrasyonu",
          "Çoklu dil (i18n) & canlı veri senkronizasyonu",
          "App Store & Google Play mağaza teslimi",
          "3 ay profesyonel destek"
        ]
      },
    ]
  },
  Web: {
    title: "WEB GELİŞTİRME VE E-TİCARET PAKETLERİ",
    cards: [
      {
        type: "Giriş",
        price: "5.000₺",
        features: [
          "React / Next.js ile kurumsal mini web sitesi",
          "Performans odaklı web tasarımı & SEO altyapısı",
          "Mobil uyumlu (Responsive) hızlı arayüz",
          "1 haftalık destek",
          "Hosting & Domain yönlendirme danışmanlığı"
        ]
      },
      {
        type: "Profesyonel",
        price: "8.000₺",
        features: [
          "Next.js / React ön yüz + Python Django backend",
          "Özel web tabanlı yönetim paneli geliştirme",
          "Dinamik içerik yönetimi (Blog, Hizmetler, Formlar)",
          "Gelişmiş SEO & arama motoru optimizasyonu",
          "Python Django API entegrasyonu",
          "1 ay teknik destek"
        ],
        highlight: true
      },
      {
        type: "Üst",
        price: "10.000₺",
        features: [
          "Özel e-ticaret altyapısı hazırlatma & web yazılımı",
          "Next.js SSG/SSR + Python Django mikroservis backend",
          "Ödeme sistemleri & sanal pos entegrasyonları",
          "Çoklu dil & Dashboard analitik grafikleri",
          "Yüksek trafik uyumlu kurumsal premium tasarım",
          "3 ay profesyonel destek"
        ]
      },
    ]
  },
  Masaüstü: {
    title: "MASAÜSTÜ VE İŞ OTOMASYONU PAKETLERİ",
    cards: [
      {
        type: "Giriş",
        price: "4.500₺",
        features: [
          "Özel masaüstü yazılımı geliştirme",
          "Veri okuma / yazma & temel form ekranları",
          "Offline çalışma & yerel veritabanı desteği",
          "İş süreçleri optimizasyonu",
          "1 hafta destek"
        ]
      },
      {
        type: "Profesyonel",
        price: "7.500₺",
        features: [
          "İşletmeler için otomasyon yazılımları",
          "C# / .NET / Python masaüstü uygulama çözümleri",
          "Python Django web/cloud veritabanı senkronizasyonu",
          "Kullanıcı roller ve gelişmiş raporlama modülü",
          "1 ay teknik destek"
        ],
        highlight: true
      },
      {
        type: "Üst",
        price: "11.000₺",
        features: [
          "Masaüstü ERP / CRM yazılımı yaptırma",
          "Gerçek zamanlı canlı veri & IoT cihaz entegrasyonu",
          "Grafik + Yönetici Dashboard paneli",
          "Departmanlar arası tam süreç optimizasyonu",
          "3 ay profesyonel teknik destek"
        ]
      }
    ]
  }
};

type PackageType = 'Mobil' | 'Web' | 'Masaüstü';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PackageType>('Mobil'); 
  const currentPackage = packagesData[activeTab];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element && typeof element.scrollIntoView === 'function') {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#140A30] text-[#E0E0E0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Başlık */}
        <header className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30 text-[#00BFFF] text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Esnek Çözüm Paketleri</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {currentPackage.title}
          </h2>
        </header>

        {/* Tab Butonları */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {(Object.keys(packagesData) as PackageType[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-xl text-base font-bold transition-all duration-300 cursor-pointer ${
                activeTab === key 
                  ? 'bg-[#00BFFF] text-white shadow-lg shadow-[rgba(0,191,255,0.4)] scale-105' 
                  : 'bg-[#1E143F] text-[#E0E0E0]/80 hover:bg-[#120B2A] hover:text-white border border-white/5'
              }`}
            >
              {key} {key === 'Mobil' ? 'Uygulamaları' : key === 'Web' ? 'Siteleri' : 'Yazılımları'}
            </button>
          ))}
        </div>

        {/* Paket Kartları (Responsive Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {currentPackage.cards.map((card, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl shadow-2xl flex flex-col justify-between transition-all duration-300 ${
                card.highlight 
                  ? 'bg-[#1E143F] text-white border-2 border-[#00BFFF] shadow-[0_0_30px_rgba(0,191,255,0.25)] -translate-y-1.5' 
                  : 'bg-[#1E143F]/80 backdrop-blur-md border border-white/10 hover:border-[#00BFFF]/40 text-[#E0E0E0]'
              }`}
            >
              {card.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00BFFF] text-white text-xs font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  En Popüler
                </span>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-2 text-white">{card.type}</h3>
                <p className="text-4xl font-extrabold text-[#00BFFF] mb-6 tracking-tight">{card.price}</p>
                
                <ul className="space-y-3.5 mb-8">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base leading-snug">
                      <Check className="w-5 h-5 mr-3 text-[#00BFFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#E0E0E0]/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={scrollToContact}
                className="w-full py-3.5 rounded-xl text-base font-bold text-white bg-[#120B2A] border border-[#00BFFF]/30 hover:bg-[#33D4FF] hover:border-[#33D4FF] transition-all duration-300 cursor-pointer shadow-md"
              >
                Hemen Teklif Alın
              </button>
            </div>
          ))}
        </div>

        {/* Alt Slogan & Call-To-Action */}
        <div className="text-center bg-[#1E143F] border border-[#00BFFF]/30 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
            HAYALLERİNİZİ KODA DÖKELİM!
          </h3>
          <p className="text-base sm:text-lg text-[#E0E0E0]/80 mb-8 max-w-xl mx-auto">
            Projenizin kapsamına özel çözümler ve teklif almak için hemen bizimle iletişime geçin.
          </p>
          <button
            onClick={scrollToContact}
            className="px-10 py-4 rounded-xl text-lg font-bold text-white bg-[#33D4FF] hover:bg-[#00BFFF] active:scale-95 transition-all duration-300 shadow-lg shadow-[rgba(51,212,255,0.4)] hover:shadow-xl hover:shadow-[rgba(0,191,255,0.6)] cursor-pointer"
          >
            HEMEN TEKLİF ALIN
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;