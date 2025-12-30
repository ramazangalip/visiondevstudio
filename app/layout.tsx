import './globals.css';
// import { GeistSans, GeistMono } from 'geist/font'; // Eğer Geist fontları kullanıyorsanız

// Metadata (isteğe bağlı)
export const metadata = {
  title: 'Vision Dev Studio | Profesyonel Yazılım ve Dijital Çözümler',
  description: 'Vizyonunuzu gerçeğe dönüştürüyoruz. Vision Dev Studio ile kurumsal web tasarım, mobil uygulama ve modern dijital çözümler.',
  keywords: ['yazılım', 'web tasarım', 'mobil uygulama', 'dijital dönüşüm', 'vision dev studio'],
  icons: {
    icon: '/favicon.ico', // public klasöründeki ikon adıyla aynı olmalı
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Dil ayarını "tr" olarak değiştiriyorum
    <html lang="tr"> 
      {/* Hata muhtemelen burada: 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
        gibi bir ifade, sunucu ve istemci arasında farklı hesaplanıyor.
        Sınıfları sadece genel sınıflarla sınırlıyoruz. Fontlar global.css'te ayarlanır.
      */}
      <body className={`antialiased`}> 
        {children}
      </body>
    </html>
  );
}