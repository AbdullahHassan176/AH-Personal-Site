const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY || 'demo_key');

module.exports = async function (context, req) {
  context.log('Contact form submission received');

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      context.res = {
        status: 400,
        body: { error: 'Missing required fields' },
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      };
      return;
    }

    // Check if Resend is properly configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'demo_key') {
      context.log('Resend API key not configured, simulating email send');
      context.res = {
        status: 200,
        body: { message: 'Email sent successfully (demo mode)', id: 'demo-123' },
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      };
      return;
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Abdullah Hassan <noreply@globalnext.rocks>',
      to: [process.env.CONTACT_EMAIL || 'abdullah.hassan@globalnext.rocks'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #d4af37;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from your personal website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      context.log('Resend error:', error);
      context.res = {
        status: 500,
        body: { error: 'Failed to send email' },
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      };
      return;
    }

    context.res = {
      status: 200,
      body: { message: 'Email sent successfully', id: data?.id },
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };

  } catch (error) {
    context.log('Contact form error:', error);
    context.res = {
      status: 500,
      body: { error: 'Internal server error' },
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
  }
};
