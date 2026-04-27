import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendContactEmail(data: { name: string; email: string; message: string }) {
  // Use Resend when API key is provided
  if (resend && process.env.EMAIL_FROM && process.env.EMAIL_TO) {
    try {
      const result = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New Contact from ${data.name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      });

      return { success: true, data: result };
    } catch (error) {
      console.error('Email send error:', error);
      return { success: false, error };
    }
  }

  console.log('Email not configured with Resend, skipping send. Data:', data);
  return { success: true };
}
