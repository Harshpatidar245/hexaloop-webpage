import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      company,
      serviceType,
      numberOfDevelopers,
      techStack,
      projectDescription,
      budget,
      timeline,
      additionalRequirements,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !serviceType || !numberOfDevelopers || !techStack || techStack.length === 0 || !projectDescription || !budget || !timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format tech stack for display
    const techStackList = Array.isArray(techStack) ? techStack.join(', ') : techStack;

    // Email content
    const mailOptions = {
      from: `"Hiring Request - ${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `🚀 New Hiring Request from ${name} - ${serviceType}`,
      text: `
NEW HIRING REQUEST

====================
PERSONAL INFORMATION
====================
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company || 'Not provided'}

====================
PROJECT DETAILS
====================
Service Type: ${serviceType}
Number of Developers: ${numberOfDevelopers}
Technologies: ${techStackList}
Budget: ${budget}
Timeline: ${timeline}

Project Description:
${projectDescription}

${additionalRequirements ? `Additional Requirements:\n${additionalRequirements}` : ''}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { background: #f9fafb; padding: 30px; }
            .section { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #667eea; }
            .section-title { color: #667eea; font-size: 18px; font-weight: bold; margin-bottom: 15px; text-transform: uppercase; }
            .info-row { margin: 12px 0; padding: 10px; background: #f9fafb; border-radius: 5px; }
            .label { font-weight: bold; color: #4f46e5; display: inline-block; min-width: 120px; }
            .value { color: #374151; }
            .tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
            .tech-badge { background: #667eea; color: white; padding: 6px 12px; border-radius: 20px; font-size: 13px; display: inline-block; }
            .description-box { background: white; border-left: 4px solid #10b981; padding: 15px; margin: 15px 0; border-radius: 5px; }
            .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
            .highlight { background: #fef3c7; padding: 2px 6px; border-radius: 3px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 New Hiring Request</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px;">Someone wants to hire you!</p>
            </div>
            
            <div class="content">
              <!-- Personal Information -->
              <div class="section">
                <div class="section-title">👤 Personal Information</div>
                <div class="info-row">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="info-row">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></span>
                </div>
                <div class="info-row">
                  <span class="label">Phone:</span>
                  <span class="value"><a href="tel:${phone}" style="color: #2563eb;">${phone}</a></span>
                </div>
                ${company ? `
                <div class="info-row">
                  <span class="label">Company:</span>
                  <span class="value">${company}</span>
                </div>
                ` : ''}
              </div>

              <!-- Project Details -->
              <div class="section">
                <div class="section-title">💼 Project Details</div>
                <div class="info-row">
                  <span class="label">Service Type:</span>
                  <span class="value highlight">${serviceType}</span>
                </div>
                <div class="info-row">
                  <span class="label">Developers Needed:</span>
                  <span class="value highlight">${numberOfDevelopers}</span>
                </div>
                <div class="info-row">
                  <span class="label">Budget:</span>
                  <span class="value highlight">${budget}</span>
                </div>
                <div class="info-row">
                  <span class="label">Timeline:</span>
                  <span class="value highlight">${timeline}</span>
                </div>
              </div>

              <!-- Technologies -->
              <div class="section">
                <div class="section-title">⚡ Required Technologies</div>
                <div class="tech-stack">
                  ${Array.isArray(techStack) 
                    ? techStack.map(tech => `<span class="tech-badge">${tech}</span>`).join('')
                    : `<span class="tech-badge">${techStack}</span>`
                  }
                </div>
              </div>

              <!-- Project Description -->
              <div class="section">
                <div class="section-title">📋 Project Description</div>
                <div class="description-box">
                  ${projectDescription.replace(/\n/g, '<br>')}
                </div>
              </div>

              ${additionalRequirements ? `
              <!-- Additional Requirements -->
              <div class="section">
                <div class="section-title">📝 Additional Requirements</div>
                <div class="description-box">
                  ${additionalRequirements.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}

              <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 15px; border-radius: 5px; margin-top: 20px;">
                <p style="margin: 0; color: #1e40af;">
                  <strong>💡 Quick Action:</strong> Reply to this email to directly contact ${name} at ${email}
                </p>
              </div>
            </div>
            
            <div class="footer">
              <p>This hiring request was submitted from your website</p>
              <p>career24x7growth@gmail.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Hiring request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending hiring request:', error);
    return NextResponse.json(
      { error: 'Failed to send hiring request. Please try again later.' },
      { status: 500 }
    );
  }
}
