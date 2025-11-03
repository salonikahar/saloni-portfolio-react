# EmailJS Setup Instructions for Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## Step 2: Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account and grant permissions
5. Note down the **Service ID** (something like `service_xxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up the template with these variables:
   - **To Email**: `{{to_email}}`
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`
   - **Subject**: `{{subject}}`
   - **Message**: `{{message}}`

4. Template content example:
   ```
   Subject: {{subject}}

   Hi,

   You have received a new message from {{from_name}} ({{from_email}}):

   {{message}}

   Best regards,
   Your Portfolio Contact Form
   ```

5. Save the template and note down the **Template ID** (something like `template_xxxxx`)

## Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (something like `xxxxxxxxxxxxxx`)

## Step 5: Update Contact.jsx
Replace the placeholder values in `src/views/components/Contact.jsx`:

```javascript
const serviceId = 'your_service_id';        // Replace with your Service ID
const templateId = 'your_template_id';      // Replace with your Template ID
const publicKey = 'your_public_key';        // Replace with your Public Key
```


## Step 6: Test the Form
1. Run your React app
2. Fill out and submit the contact form
3. Check your email for the message

## Important Notes
- EmailJS has a free tier with 200 emails per month
- Keep your Public Key secure (it's safe to use in frontend code)
- Service ID and Template ID should be kept private if possible
- The form includes loading states and success/error messages

## Troubleshooting
- If emails aren't sending, check the browser console for errors
- Verify all IDs and keys are correct
- Make sure your email service is properly connected in EmailJS
