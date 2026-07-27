"use client";

import React, { useState } from 'react';
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
    logo: "/logos.png",
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
              {key.charAt(0).toUpperCase() + key.slice(1)} {key === 'Mobil' ? 'Uygulama' : key === 'Web' ? 'Sitesi' : 'Uygulama'}
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