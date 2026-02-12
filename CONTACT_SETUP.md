# Contact Form Email Setup

Your contact form backend has been successfully configured! Here's what you need to do to make it work:

## Setup Instructions

### 1. Configure Email Settings

Edit the `.env.local` file and add your email configuration:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=owner-email@example.com
```

### 2. Gmail Setup (Recommended)

If using Gmail:

1. **Enable 2-Factor Authentication:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Factor Authentication

2. **Generate App Password:**
   - Visit [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Copy the 16-character password
   - Use this as `EMAIL_PASSWORD` in `.env.local`

3. **Update .env.local:**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   EMAIL_FROM=your-gmail@gmail.com
   EMAIL_TO=owner-email@example.com
   ```

### 3. Alternative Email Providers

#### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

#### Yahoo
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

#### SendGrid
```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
```

### 4. Test the Contact Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out the form and submit
4. Check your email inbox (EMAIL_TO address)

## Features Implemented

✅ **API Route:** `/api/contact` handles form submissions
✅ **Email Validation:** Validates email format and required fields
✅ **HTML Emails:** Beautifully formatted email templates
✅ **Error Handling:** Proper error messages and user feedback
✅ **Reply-To:** Emails have reply-to set to the sender's email
✅ **Security:** Environment variables for sensitive data

## Troubleshooting

### "Failed to send email" error:
- Check your EMAIL_HOST, EMAIL_PORT, EMAIL_USER, and EMAIL_PASSWORD
- Ensure 2FA is enabled and you're using an App Password (for Gmail)
- Check your email provider's SMTP settings

### "Invalid email format" error:
- Ensure the email entered in the form is valid

### No email received:
- Check spam/junk folder
- Verify EMAIL_TO is correct
- Check server console for errors

## Security Notes

⚠️ **Important:**
- Never commit `.env.local` to version control
- The `.env.example` file is for reference only
- Keep your EMAIL_PASSWORD secure
- Use App Passwords, not your main account password

## Files Created/Modified

- ✅ `app/api/contact/route.ts` - API endpoint for email sending
- ✅ `.env.local` - Email configuration (update with your details)
- ✅ `.env.example` - Template for environment variables
- ✅ `components/molecules/ContactForm/ContactForm.tsx` - Updated to use API

---

**Need help?** Check the console logs when submitting the form for detailed error messages.
