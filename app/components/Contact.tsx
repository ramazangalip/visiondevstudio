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
    <div 
        id="contact"
        // DÜZELTME: min-h-screen ve pt-20 ile Navbar'ın altından başlama garantisi
        className={`min-h-screen flex flex-col justify-center pt-20 pb-20 bg-[${colors.background}] text-[${colors.text}]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <header className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-3">
            Bizimle <span className={`text-[${colors.primary}]`}>İletişim Kurun</span>
          </h2>
          <p className={`text-xl font-light text-[${colors.text}] max-w-3xl mx-auto`}>
            Projenizi hayata geçirmek için hazırsanız veya herhangi bir sorunuz varsa, bize ulaşın.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* İletişim Bilgileri (Sol Sütun) */}
          <div className={`space-y-6 p-6 rounded-xl shadow-2xl bg-[${colors.surface}]`}>
            <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-3 mb-4">İletişim Bilgileri</h3>
            
            {/* E-posta */}
            <div className="flex items-start space-x-4">
              <Mail className={`w-6 h-6 text-[${colors.primary}] flex-shrink-0 mt-1`} />
              <div>
                <p className="font-semibold">Email Adresimiz</p>
                {/* DÜZELTME: Mailto ve gösterilen adresi .com.tr ile güncelliyoruz */}
                <a href="mailto:info@visiondevstudio.com.tr" className={`text-sm text-[${colors.primary}] hover:text-white transition`}>ramazansaidgalip@gmail.com</a>
              </div>
            </div>

           
            
            {/* Adres */}
            <div className="flex items-start space-x-4">
              <MapPin className={`w-6 h-6 text-[${colors.primary}] flex-shrink-0 mt-1`} />
              <div>
                <p className="font-semibold">Ofis Adresi</p>
                <p className="text-sm">Bingöl, Turkiye</p>
              </div>
            </div>
          </div>
          
          {/* İletişim Formu (Sağ İki Sütun) */}
          <div className="md:col-span-2 p-8 rounded-xl shadow-2xl bg-[${colors.surface}]">
            <h3 className="text-3xl font-bold text-white mb-6">Mesajınızı Yazın</h3>

            {/* Status Message */}
            {status !== 'idle' && (
              <div className={`p-4 mb-4 rounded-lg text-white ${status === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
                {status === 'success' ? 'Mesajınız başarıyla gönderildi!' : status}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="İsim"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-[${colors.darkSurface}] border border-transparent focus:border-[${colors.primary}] outline-none text-[${colors.text}] transition`}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-lg bg-[${colors.darkSurface}] border border-transparent focus:border-[${colors.primary}] outline-none text-[${colors.text}] transition`}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Konu"
                required
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-[${colors.darkSurface}] border border-transparent focus:border-[${colors.primary}] outline-none text-[${colors.text}] transition`}
              />
              <textarea
                name="message"
                placeholder="Mesajınız"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg bg-[${colors.darkSurface}] border border-transparent focus:border-[${colors.primary}] outline-none text-[${colors.text}] resize-none transition`}
              />
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full md:w-auto px-8 py-3 rounded-lg text-lg font-semibold text-white bg-[${colors.buttonBase}] 
                            hover:bg-[${colors.buttonHover}] transition duration-300 
                            shadow-lg shadow-[rgba(51,212,255,0.6)] disabled:opacity-50 flex items-center justify-center`}
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {loading ? 'Mesaj Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;