import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  const { email, subject, message } = await request.json();

  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { email: 'faccundo.v@outlook.com', name: 'Facundo' },
        to: [{ email: email, name: 'Recipient Name' }],
        subject: subject,
        htmlContent: `<html><body><p>${message}</p></body></html>`
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    return NextResponse.json({ success: true, data: response.data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Email failed to send' });
  }
}
