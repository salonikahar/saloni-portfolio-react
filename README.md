# Saloni Kahar - React Portfolio (MVC)

This is a ready-to-run React portfolio project using an MVC-like structure (models, controllers, views/components).
It uses **React + Bootstrap 5** and integrates **EmailJS** for sending messages from the contact form.

## Setup

1. Extract the zip.
2. Open the folder in terminal and run:
```
npm install
npm start
```

## EmailJS Setup

1. Create an account at https://www.emailjs.com/
2. Add an email service (Service ID).
3. Create an email template (Template ID).
4. Get your Public Key (User ID / Public Key).
5. Open `src/views/components/Contact.jsx` and replace:
   - `YOUR_SERVICE_ID`
   - `YOUR_TEMPLATE_ID`
   - `YOUR_PUBLIC_KEY`

The contact form uses `emailjs.sendForm(serviceID, templateID, form.current, userID)`.

## Notes

- Replace placeholder images in `src/models/portfolioData.js` with your actual images (put them under `public/assets/`).
- Adjust content in `src/models/portfolioData.js` as required.

Enjoy! 🎉
