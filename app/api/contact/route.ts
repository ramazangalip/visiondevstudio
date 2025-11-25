import { NextResponse } from 'next/server';
import { Resend } from 'resend'; // Resend kütüphanesini import ediyoruz

// Ortam değişkenini kullanarak Resend istemcisini başlatıyoruz
// UYARI: RESEND_API_KEY sunucu tarafında (backend) kullanılmalıdır.
const resend = new Resend(process.env.RESEND_API_KEY);

// DÜZELTME: GÖNDEREN ADRESİNİ RESEND'İN DOĞRULANMIŞ TEST ADRESİNE ÇEVİRİYORUZ
const RESEND_FROM_EMAIL = "onboarding@resend.dev"; 
// Hedef mail adresini .com.tr olarak bırakıyoruz
const TO_EMAIL = 'info@visiondevstudio.com.tr'; 


export async function POST(request: Request) {
    // İstek gövdesinden (body) verileri al
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
        return NextResponse.json({ message: 'Lütfen tüm alanları doldurun.' }, { status: 400 });
    }

    // API anahtarı yoksa hata dön
    if (!process.env.RESEND_API_KEY) {
        console.error("RESEND_API_KEY ortam değişkeni tanımlı değil.");
        return NextResponse.json({ message: 'Sunucu yapılandırma hatası: Resend API Anahtarı eksik.' }, { status: 500 });
    }
    
    try {
        // MAİL GÖNDERİM İŞLEMİ
        const { data, error } = await resend.emails.send({
            from: RESEND_FROM_EMAIL, // Gönderici (Artık Resend'in adresi)
            to: [TO_EMAIL],         // Alıcı (Sizin gelen kutunuz)
            subject: `[VDS Contact] Yeni Mesaj: ${subject} (${name})`,
            replyTo: email,         // Yanıt adresi (Müşterinin adresi)
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #00BFFF; border-radius: 8px; background-color: #0A0A1F; color: #E0E0E0;">
                    <h2 style="color: #00BFFF; border-bottom: 2px solid #00BFFF; padding-bottom: 10px;">VisionDevStudio Yeni İletişim Formu</h2>
                    <p style="margin-bottom: 10px;"><strong>Gönderen:</strong> ${name}</p>
                    <p style="margin-bottom: 10px;"><strong>Yanıt E-postası:</strong> ${email}</p>
                    <p style="margin-bottom: 20px;"><strong>Konu:</strong> ${subject}</p>
                    
                    <p style="margin-top: 15px; font-weight: bold;">Mesaj İçeriği:</p>
                    <div style="background-color: #1E143F; padding: 15px; border-radius: 5px; color: #E0E0E0;">
                        <p style="white-space: pre-wrap; margin: 0;">${message}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ message: 'Resend üzerinden mail gönderme hatası oluştu.' }, { status: 500 });
        }

        console.log(`[Resend] Mail ${email} adresinden başarıyla gönderildi. ID: ${data?.id}`);

        return NextResponse.json({ message: 'E-posta başarıyla gönderildi.' }, { status: 200 });

    } catch (error) {
        console.error('Genel Mail Gönderme Hatası:', error);
        return NextResponse.json({ message: 'Beklenmeyen bir hata oluştu.' }, { status: 500 });
    }
}