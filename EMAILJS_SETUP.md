# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your portfolio contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the instructions to connect your email account
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. **IMPORTANT**: Set up the template fields correctly:

### Template Settings:
- **To Email**: `sailokeshreddy@gmail.com` (your email where you want to receive messages)
- **From Name**: `{{from_name}}`
- **From Email**: Use your connected email service email (e.g., your Gmail)
- **Subject**: `New Contact from {{from_name}} - {{subject}}`

### Email Body Template:
```
Hello ,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)


## Step 4: Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const emailjsConfig = {
  serviceID: "service_abc123", // Your actual service ID
  templateID: "template_xyz789", // Your actual template ID
  publicKey: "user_abcdef123456", // Your actual public key
};
```

## Step 6: Test the Form

1. Start your development server: `npm start`
2. Fill out the contact form and submit
3. Check your email inbox for the message
4. Check the browser console for any errors

## Troubleshooting


### **Other Common Issues**
- **403 Forbidden**: Check if your public key is correct
- **404 Not Found**: Verify your service ID and template ID
- **Network Error**: Check your internet connection
- **Template Error**: Make sure your template variables match the ones in the code

## Free Plan Limits

- 200 emails per month
- EmailJS branding in emails
- Basic support

For higher limits, consider upgrading to a paid plan.

## Security Note

The public key is safe to expose in frontend code. It's designed to be public and only allows sending emails, not reading them.
