# EmailJS Setup Guide

## Steps to Enable Email Functionality

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

### 2. Add Email Service
1. Go to Email Services section
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the authentication steps
5. Copy the **Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to Email Templates section
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Deep Dey)

Example template:
```
Subject: New message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

4. Copy the **Template ID** (e.g., `template_abc456`)

### 4. Get Public Key
1. Go to Account > General
2. Copy your **Public Key** (e.g., `user_def789`)

### 5. Update Contact.jsx
Replace the placeholder values in `client/src/components/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

### 6. Test the Contact Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message
4. You should see a success toast notification

## Toast Notifications
- ✅ Success: "Message sent successfully!"
- ❌ Error: "Server timeout. Please send manually to deepdey715@gmail.com"

## Troubleshooting
- If emails don't arrive, check your EmailJS dashboard for error logs
- Make sure your email template is enabled
- Verify the Service is connected properly
- Check browser console for errors

## Current Status
The contact form is now set up with:
- EmailJS integration for direct email sending
- React Hot Toast for notifications
- Loading state during submission
- Error handling with fallback message
