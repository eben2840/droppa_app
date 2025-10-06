# Waitlist Email Setup

## Quick Setup (5 minutes)

1. **Go to [Formspree.io](https://formspree.io)**
2. **Sign up for free**
3. **Create a new form**
4. **Copy your form ID** (looks like `xpwzgqvr`)
5. **Replace the form ID** in `/src/pages/api/waitlist.js`:
   ```javascript
   const formspreeUrl = "https://formspree.io/f/YOUR_FORM_ID_HERE";
   ```

## What happens:
- User enters email → Gets confirmation email
- You get notification email with new signup
- Completely free for up to 50 emails/month

## Alternative (Even Simpler):
Use [EmailJS](https://emailjs.com) - no backend needed, just frontend JavaScript.

That's it! Your waitlist is ready. 🚀