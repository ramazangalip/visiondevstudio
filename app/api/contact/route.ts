import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import path from 'path';
import fs from 'fs';

const TO_EMAIL = 'ramazansaidgalip@gmail.com';

export async function POST(request: Request) {
    try {
        const formData = await request.json();
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ message: 'Lütfen tüm alanları doldurun.' }, { status: 400 });
        }

        // Logo dosya yolu (public/logos.png)
        const logoFilePath = path.join(process.cwd(), 'public', 'logos.png');
        const logoExists = fs.existsSync(logoFilePath);

        // VisionDevStudio Markalı & Logolu HTML E-posta Şablonu
        const htmlTemplate = `
            <div style="max-width: 600px; margin: 0 auto; background-color: #140A30; font-family: 'Segoe UI', Arial, sans-serif; border-radius: 12px; overflow: hidden; border: 1px solid rgba(0, 191, 255, 0.4); color: #E0E0E0;">
                <!-- VisionDevStudio Logolu Header -->
                <div style="background: linear-gradient(135deg, #1E143F 0%, #140A30 100%); padding: 30px; text-align: center; border-bottom: 3px solid #00BFFF;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                        <tr>
                            ${logoExists ? `
                            <td style="vertical-align: middle; padding-right: 12px;">
                                <img src="cid:vdslogo@visiondevstudio" alt="VisionDevStudio Logo" style="width: 42px; height: 42px; border-radius: 8px; display: block;" />
                            </td>
                            ` : ''}
                            <td style="vertical-align: middle;">
                                <h1 style="color: #00BFFF; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 1px;">
                                    VisionDevStudio
                                </h1>
                            </td>
                        </tr>
                    </table>
                    <p style="color: #33D4FF; margin: 12px 0 0 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;">
                        WEB SİTESİ İLETİŞİM BİLDİRİMİ
                    </p>
                </div>

                <!-- İçerik Alanı -->
                <div style="padding: 30px;">
                    <div style="background-color: #1E143F; border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #00BFFF;">
                        <p style="margin: 8px 0; font-size: 15px;"><strong style="color: #00BFFF;">👤 Ad Soyad:</strong> ${name}</p>
                        <p style="margin: 8px 0; font-size: 15px;"><strong style="color: #00BFFF;">✉️ E-posta:</strong> <a href="mailto:${email}" style="color: #33D4FF; text-decoration: none;">${email}</a></p>
                        <p style="margin: 8px 0; font-size: 15px;"><strong style="color: #00BFFF;">📌 Konu:</strong> ${subject}</p>
                    </div>

                    <h3 style="color: #FFFFFF; font-size: 16px; margin-top: 25px; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px;">
                        💬 Mesaj İçeriği:
                    </h3>
                    <div style="background-color: #120B2A; border-radius: 8px; padding: 20px; border: 1px solid rgba(255,255,255,0.08); font-size: 15px; line-height: 1.6; color: #E0E0E0; white-space: pre-wrap;">${message}</div>
                </div>

                <!-- Footer -->
                <div style="background-color: #120B2A; padding: 18px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid rgba(255,255,255,0.05);">
                    © ${new Date().getFullYear()} VisionDevStudio | Bu e-posta web sitenizdeki iletişim formundan otomatik olarak gönderilmiştir.
                </div>
            </div>
        `;

        // 1. YÖNTEM: SMTP (Nodemailer) Kullanımı
        const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
        const smtpPort = parseInt(process.env.SMTP_PORT || '465');
        const smtpUser = process.env.SMTP_USER || 'ramazansaidgalip@gmail.com';
        const smtpPass = process.env.SMTP_PASS;

        if (smtpPass) {
            const transporter = nodemailer.createTransport({
                host: smtpHost,
                port: smtpPort,
                secure: smtpPort === 465,
                auth: {
                    user: smtpUser,
                    pass: smtpPass,
                },
            });

            await transporter.sendMail({
                from: `"VisionDevStudio İletişim" <${smtpUser}>`,
                to: TO_EMAIL,
                replyTo: email,
                subject: `[VisionDevStudio İletişim] ${subject} - (${name})`,
                html: htmlTemplate,
                attachments: logoExists ? [
                    {
                        filename: 'logos.png',
                        path: logoFilePath,
                        cid: 'vdslogo@visiondevstudio',
                    }
                ] : [],
            });

            console.log(`[SMTP] Mail başarıyla gönderildi: ${email}`);
            return NextResponse.json({ message: 'Mesajınız SMTP üzerinden başarıyla gönderildi!' }, { status: 200 });
        }

        // 2. YÖNTEM: Resend Fallback (Eğer RESEND_API_KEY tanımlıysa)
        if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_dummy_key_for_build') {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const { error } = await resend.emails.send({
                from: "onboarding@resend.dev",
                to: [TO_EMAIL],
                replyTo: email,
                subject: `[VisionDevStudio İletişim] ${subject} - (${name})`,
                html: htmlTemplate,
            });

            if (!error) {
                console.log(`[Resend] Mail başarıyla gönderildi: ${email}`);
                return NextResponse.json({ message: 'Mesajınız başarıyla gönderildi!' }, { status: 200 });
            }
        }

        return NextResponse.json({
            message: 'Mesajınız alındı! (Not: Canlıda SMTP mail gönderimi için .env.local dosyasında SMTP_PASS tanımlanmalıdır.)'
        }, { status: 200 });

    } catch (error) {
        console.error('Mail Gönderme Hata Detayı:', error);
        return NextResponse.json({ message: 'Mail gönderilirken bir sunucu hatası oluştu.' }, { status: 500 });
    }
}