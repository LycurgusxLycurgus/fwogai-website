# Interactive Landing Page

![Project Banner](public/assets/banner.png)

## Table of Contents

- [Description](#description)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Deployment](#deployment)
- [Linking a Custom Domain](#linking-a-custom-domain)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Description

This project is a visually engaging, single-page interactive website designed as a landing page. Inspired by dynamic and playful designs, it features:

- A customizable background image.
- Three interactive icons linking to Dexscreener, X (Twitter), and Telegram.
- A central interactive image that, when clicked, generates random speech bubbles with dialogue.
- A persistent link at the bottom directing users to the specified X (Twitter) profile.

The website is optimized for deployment on Vercel and can be linked to a custom domain via Hostinger.

## Project Structure

```
your-project/
├── public/
│   ├── assets/
│   │   ├── background.webp
│   │   ├── central.png
│   │   ├── banner.png
│   │   └── icons/
│   │       ├── dexscreener.svg
│   │       ├── twitter.svg
│   │       └── telegram.svg
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── .gitignore
├── README.md
└── package.json
```

## Features

- **Responsive Design:** Ensures the website looks great on all devices.
- **Interactive Elements:** Central image click generates dynamic speech bubbles with random dialogues.
- **External Links:** Icons link to Dexscreener, X (Twitter), and Telegram.
- **Customizable:** Easily replace background and central images to suit your branding.
- **Optimized for Deployment:** Ready to be deployed on Vercel with seamless integration.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/your-project.git
   cd your-project
   ```

2. **Install Dependencies:**

   If your project uses Node.js (e.g., for build tools), install the necessary packages:

   ```bash
   npm install
   ```

   *If not using Node.js, you can skip this step.*

3. **Add Assets:**

   Ensure all necessary assets are placed in the `public/assets/` directory:

   - `background.webp`: Your chosen background image.
   - `central.png`: The transparent interactive image.
   - `icons/`: SVG icons for Dexscreener, Twitter, and Telegram.

## Deployment

This project is optimized for deployment on Vercel. Follow these steps to deploy:

1. **Sign Up / Log In to Vercel:**
   - Visit [Vercel](https://vercel.com/) and create an account or log in.

2. **Connect Your Git Repository:**
   - Push your project to a Git provider like GitHub, GitLab, or Bitbucket.

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Import Project to Vercel:**
   - In Vercel, click on **"New Project"**.
   - Select your repository and follow the prompts.
   - For a static site, Vercel typically auto-detects the settings.

4. **Configure Build Settings (if necessary):**
   - For static sites, set the **Output Directory** to `public/`.

5. **Deploy:**
   - Click **"Deploy"**. Vercel will build and deploy your project, providing a default Vercel URL.

## Linking a Custom Domain

To link your custom domain from Hostinger to your Vercel deployment:

1. **Access Hostinger DNS Settings:**
   - Log in to your [Hostinger](https://www.hostinger.com/) account.
   - Navigate to the **Domains** section and select your domain.

2. **Update DNS Records:**

   - **Using CNAME Record:**
     - **Type:** CNAME
     - **Name:** `www`
     - **Value:** `cname.vercel-dns.com`
     - **TTL:** Automatic

   - **Using A Records:**
     - Obtain Vercel's IP addresses from [Vercel Documentation](https://vercel.com/docs/concepts/projects/custom-domains).
     - **Type:** A
     - **Name:** `@`
     - **Value:** (Vercel's IP addresses)
     - **TTL:** Automatic

3. **Add Domain to Vercel:**
   - In Vercel, go to your project **Settings** > **Domains**.
   - Click **"Add"** and enter your custom domain (e.g., `yourdomain.com`).
   - Follow the verification steps.

4. **SSL Configuration:**
   - Vercel automatically provides SSL certificates. Once verified, your site will be accessible via `https://yourdomain.com`.

*Note: DNS changes may take up to 48 hours to propagate, though they typically update within a few hours.*

## Technologies Used

- **HTML5:** Structure of the webpage.
- **CSS3:** Styling and responsiveness.
- **JavaScript:** Interactivity and dynamic content generation.
- **Vercel:** Hosting and deployment platform.
- **Hostinger:** Domain registration and DNS management.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository.**
2. **Create a Feature Branch:**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Commit Your Changes:**

   ```bash
   git commit -m "Add YourFeature"
   ```

4. **Push to the Branch:**

   ```bash
   git push origin feature/YourFeature
   ```

5. **Open a Pull Request.**

## License

This project is licensed under the [MIT License](LICENSE).

---

**Feel free to customize the `README.md` further to better fit your project's specific needs.**