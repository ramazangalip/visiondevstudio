"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, Send } from 'lucide-react';

// Ortak renk paleti
const colors = {
  primary: '#00BFFF',
  background: '#140A30', // Ana arka plan
  text: '#E0E0E0',
  surface: '#1E143F', // Kartların arka planı (koyu)
  darkSurface: '#120B2A',
  buttonBase: '#33D4FF',
  buttonHover: '#00BFFF',
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | string>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      // API Route'a POST isteği gönder
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Formu sıfırla
      } else {
        setStatus(data.message || 'Gönderim başarısız oldu.');
      }
    } catch (error) {
      console.error('Gönderim hatası:', error);
      setStatus('Bir hata oluştu, lütfen daha sonra tekrar deneyin.');
    } finally {
      setLoading(false);
      // Başarılı veya hatalı mesajı 5 saniye sonra kaldır
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section 
      id="contact"
      className="py-24 md:py-32 bg-[#140A30] text-[#E0E0E0] relative overflow-hidden"
    >
      {/* Arka plan parlama efekti */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00BFFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Başlık Bölümü */}
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Bizimle <span className="text-[#00BFFF] drop-shadow-[0_0_15px_rgba(0,191,255,0.4)]">İletişim Kurun</span>
          </h2>
          <p className="text-lg md:text-xl font-light text-[#E0E0E0]/80 max-w-2xl mx-auto leading-relaxed">
            İşletmeniz için özel yazılım, mobil uygulama veya kurumsal web projenizi hayata geçirmek için hemen bizimle iletişime geçin.
          </p>
        </header>

        {/* Ana Izgara Yapısı (Kartlar Arası Rahat Mesafe) */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          
          {/* İletişim Bilgileri Kartı (Sol) */}
          <div className="lg:col-span-1 bg-[#1E143F] border border-[#00BFFF]/20 rounded-2xl p-8 shadow-2xl space-y-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-4">
              İletişim Bilgileri
            </h3>
            
            <div className="space-y-6">
              {/* E-posta */}
              <div className="flex items-start space-x-4 p-3 rounded-xl bg-[#120B2A]/60 border border-white/5 transition hover:border-[#00BFFF]/40">
                <div className="p-3 rounded-lg bg-[#00BFFF]/10 text-[#00BFFF]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">Email Adresimiz</p>
                  <a 
                    href="mailto:ramazansaidgalip@gmail.com" 
                    className="text-sm md:text-base font-medium text-[#33D4FF] hover:text-white transition break-all"
                  >
                    ramazansaidgalip@gmail.com
                  </a>
                </div>
              </div>

              {/* Konum */}
              <div className="flex items-start space-x-4 p-3 rounded-xl bg-[#120B2A]/60 border border-white/5 transition hover:border-[#00BFFF]/40">
                <div className="p-3 rounded-lg bg-[#00BFFF]/10 text-[#00BFFF]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-1">Lokasyon</p>
                  <p className="text-sm md:text-base font-medium text-white">Bingöl, Türkiye</p>
                </div>
              </div>
            </div>

            {/* Bilgi Rozeti */}
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-white/60 leading-relaxed">
                ⚡ Proje talepleriniz için aynı gün içerisinde teknik ekibimiz tarafından dönüş yapılmaktadır.
              </p>
            </div>
          </div>
          
          {/* İletişim Formu Kartı (Sağ İki Sütun) */}
          <div className="lg:col-span-2 bg-[#1E143F] border border-[#00BFFF]/20 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-sm">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Mesajınızı Gönderin
              </h3>
              <p className="text-sm text-[#E0E0E0]/70">
                Aşağıdaki formu doldurarak projeniz hakkında detaylı bilgi verebilirsiniz.
              </p>
            </div>

            {/* Status Mesajı */}
            {status !== 'idle' && (
              <div className={`p-4 mb-6 rounded-xl font-medium text-sm transition-all duration-300 ${
                status === 'success' 
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30' 
                  : 'bg-rose-950/80 text-rose-300 border border-rose-500/30'
              }`}>
                {status === 'success' ? '✅ Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.' : status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Ad Soyad */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    Adınız & Soyadınız
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ahmet Yılmaz"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#120B2A] border border-white/10 text-white placeholder-white/30 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition duration-200"
                  />
                </div>

                {/* E-posta */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="ornek@sirket.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#120B2A] border border-white/10 text-white placeholder-white/30 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition duration-200"
                  />
                </div>
              </div>

              {/* Konu */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Proje Konusu
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Örn: Özel Mobil Uygulama & Web Projesi"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#120B2A] border border-white/10 text-white placeholder-white/30 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none transition duration-200"
                />
              </div>

              {/* Mesaj */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  placeholder="Projenizin detaylarını ve beklentilerinizi buraya yazabilirsiniz..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#120B2A] border border-white/10 text-white placeholder-white/30 focus:border-[#00BFFF] focus:ring-2 focus:ring-[#00BFFF]/20 outline-none resize-none transition duration-200"
                />
              </div>
              
              {/* Gönder Butonu */}
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-10 py-4 rounded-xl text-base font-bold text-white bg-[#33D4FF] hover:bg-[#00BFFF] active:scale-95 transition-all duration-300 shadow-lg shadow-[rgba(51,212,255,0.3)] hover:shadow-xl hover:shadow-[rgba(0,191,255,0.5)] disabled:opacity-50 flex items-center justify-center cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {loading ? 'Gönderiliyor...' : 'Teklif Al & Gönder'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;