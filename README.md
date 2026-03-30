# Arment Website - Setup Instructions

Complete website for arment-app.com with purple/blue gradient branding.

## What's Included

### Pages
- **index.html** - Homepage with features, how-it-works, download section
- **pages/support.html** - FAQ and help center
- **pages/terms.html** - Terms of Service
- **pages/privacy.html** - Privacy Policy
- **pages/guidelines.html** - Community Guidelines

### Assets
- **images/logo.svg** - Arment logo (debate bubbles with spark)
- **images/app-store-badge.svg** - App Store download button
- **css/style.css** - Main stylesheet
- **css/pages.css** - Support and legal pages styles
- **js/main.js** - Interactive functionality

## Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Purple/blue gradient theme matching the app
✅ Smooth animations and transitions
✅ Mobile menu
✅ Newsletter signup form
✅ SEO optimized
✅ Fast loading
✅ Accessibility friendly

## How to Upload to Your Domain

### Option 1: Using cPanel (Most Common)

1. Log into your hosting control panel (cPanel)
2. Go to **File Manager**
3. Navigate to `public_html` folder
4. Delete any existing files (or backup first)
5. Click **Upload**
6. Upload all files maintaining the folder structure:
   ```
   public_html/
   ├── index.html
   ├── css/
   │   ├── style.css
   │   └── pages.css
   ├── js/
   │   └── main.js
   ├── images/
   │   ├── logo.svg
   │   └── app-store-badge.svg
   └── pages/
       ├── support.html
       ├── terms.html
       ├── privacy.html
       └── guidelines.html
   ```
7. Your site is now live at arment-app.com!

### Option 2: Using FTP (FileZilla)

1. Download FileZilla (free FTP client)
2. Connect using your hosting credentials:
   - Host: ftp.arment-app.com (or your hosting IP)
   - Username: (from your hosting provider)
   - Password: (from your hosting provider)
   - Port: 21
3. Navigate to `public_html` or `www` folder on the remote side
4. Drag all website files from your computer to the server
5. Wait for upload to complete

### Option 3: Using Git (GitHub Pages, Netlify, Vercel)

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Connect to your deployment service:
   - **Netlify:** Drag the folder to netlify.com/drop
   - **Vercel:** Import from GitHub
   - **GitHub Pages:** Enable in repository settings
4. Point your custom domain in DNS settings

## Customization

### Update Email Addresses
Replace placeholder emails in:
- `pages/support.html` (support@, bugs@, feedback@)
- `pages/terms.html` (legal@)
- `pages/privacy.html` (privacy@)
- `pages/guidelines.html` (community@)

### Add Real App Store Link
When your app is approved:
1. Open `index.html`
2. Find: `<a href="#" class="app-store-btn">`
3. Replace `#` with your App Store URL

### Connect Newsletter Form
In `js/main.js`, replace the TODO comment with your email service:
- Mailchimp
- SendGrid
- ConvertKit
- Or your preferred service

### Update Social Links
In `index.html` footer, replace `#` with your social media URLs:
- Twitter/X
- Instagram
- LinkedIn

## Testing Locally

Before uploading, test on your computer:

1. Open `index.html` in a web browser
2. Click all navigation links
3. Test mobile menu (resize browser)
4. Check all pages load correctly
5. Test forms (newsletter, etc.)

## DNS Setup

Make sure your domain points to your hosting:
1. Log into your domain registrar (where you bought arment-app.com)
2. Update nameservers to your hosting provider's nameservers
3. Wait 24-48 hours for DNS propagation

## SSL Certificate (HTTPS)

Most hosts offer free SSL:
1. In cPanel, go to **SSL/TLS Status**
2. Click **Run AutoSSL**
3. Wait a few minutes
4. Your site will be accessible via https://arment-app.com

## Need Help?

If you run into issues:
1. Contact your hosting provider's support
2. Check file permissions (should be 644 for files, 755 for folders)
3. Clear your browser cache
4. Try a different browser

## Future Updates

To update the website:
1. Edit files on your computer
2. Re-upload changed files via FTP or cPanel
3. Clear browser cache to see changes

---

Your Arment website is ready to go live! 🚀
