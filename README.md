# 🚀 Mo Aarif - Professional Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.33-FF0080?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **A cinematic, high-fidelity portfolio showcasing full-stack engineering expertise with cutting-edge web technologies.**

🌐 **Live Site**: [moaarif.in](https://moaarif.in)  
📂 **Repository**: [github.com/moaarif-brt/moaarif-portfolio](https://github.com/moaarif-brt/moaarif-portfolio)

---

## ✨ Features

### 🎨 **Premium Design System**
- **Multi-Theme Architecture**: Dynamic theme switching with `next-themes` (Auto, Ice, Paper modes)
- **Cinematic Animations**: Scroll-triggered parallax, 3D card interactions, and text scramble effects
- **Glassmorphism UI**: Modern frosted-glass aesthetics with backdrop blur
- **Custom Cursor**: Interactive magnetic cursor with smooth tracking
- **Aurora Background**: Dynamic gradient animations for atmospheric depth

### 🏗️ **Advanced Architecture**
- **Next.js 16 App Router**: Server-side rendering with React 19
- **TypeScript**: Full type safety across the entire codebase
- **Component-Driven**: Modular, reusable UI components
- **Responsive Design**: Mobile-first approach with fluid breakpoints
- **Performance Optimized**: Static generation, image optimization, and code splitting

### 🔍 **World-Class SEO**
- **JSON-LD Structured Data**: Person, WebSite, ProfessionalService, and ItemList schemas
- **OpenGraph & Twitter Cards**: Premium social media previews
- **Dynamic Metadata**: Unique meta tags for every route
- **PWA Ready**: Web app manifest for installability
- **Sitemap & Robots.txt**: Optimized for search engine crawling

### 🎯 **Key Sections**
1. **Hero**: Immersive landing with 3D portrait and scroll-triggered animations
2. **About**: Professional timeline with tech stack visualization
3. **Projects**: Cinematic horizontal scroll showcase with 3D cards
4. **Resume**: Comprehensive digital CV with experience, education, and certifications
5. **Contact**: Interactive social badges with mission status HUD

---

## 🛠️ Tech Stack

### **Core**
- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 12.33

### **UI Components**
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **Utilities**: clsx for conditional styling

### **Development**
- **Linting**: ESLint with Next.js config
- **Build Tool**: Turbopack (Next.js 16)
- **Package Manager**: npm

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/moaarif-brt/moaarif-portfolio.git
   cd moaarif-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### **Build for Production**
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
moaarif-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # Resume/CV page
│   │   ├── projects/           # Projects archive
│   │   ├── contact/            # Contact page
│   │   ├── manifest.ts         # PWA manifest
│   │   ├── robots.ts           # Robots.txt configuration
│   │   └── sitemap.ts          # Dynamic sitemap
│   ├── components/
│   │   ├── home/               # Section components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Aurora.tsx
│   │   │   └── ParticleField.tsx
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Interactive3DCard.tsx
│   │   │   ├── TextScramble.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   └── ThemeSwitcher.tsx
│   │   ├── resume/             # Resume component
│   │   └── providers/          # Context providers
│   └── app/globals.css         # Global styles & theme variables
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

---

## 🎨 Key Components

### **Interactive3DCard**
3D tilt effect on hover with perspective transforms and smooth transitions.

### **TextScramble**
Cyberpunk-style text reveal animation with character randomization.

### **CustomCursor**
Magnetic cursor that follows mouse movement with spring physics.

### **Aurora**
Animated gradient background with dynamic color shifts.

### **ThemeSwitcher**
Multi-theme toggle with system preference detection.

---

## 🌐 SEO Implementation

This portfolio implements **Alpha-Grade SEO** with:

- ✅ **Structured Data**: Multiple JSON-LD schemas for rich snippets
- ✅ **Meta Tags**: Comprehensive OpenGraph and Twitter Card support
- ✅ **Canonical URLs**: Proper URL canonicalization
- ✅ **Sitemap**: Auto-generated XML sitemap
- ✅ **Robots.txt**: Optimized crawling instructions
- ✅ **Performance**: 95+ Lighthouse scores

---

## 📈 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: 95+

---

## 🚢 Deployment

### **Vercel (Recommended)**
1. Push code to GitHub
2. Import repository in [Vercel](https://vercel.com/new)
3. Deploy with one click
4. Add custom domain in Settings → Domains

### **Other Platforms**
Compatible with any platform supporting Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages

---

## 📝 License

This project is **proprietary** and belongs to **Mo Aarif**. All rights reserved.

---

## 👨‍💻 Author

**Mo Aarif**  
Full Stack Architect | Python Specialist | IoT Engineer

- 🌐 Website: [moaarif.in](https://moaarif.in)
- 💼 LinkedIn: [linkedin.com/in/mo-aarif](https://linkedin.com/in/mo-aarif)
- 🐙 GitHub: [github.com/moaarif-brt](https://github.com/moaarif-brt)
- 📧 Email: contact@moaarif.in

---

## 🙏 Acknowledgments

Built with cutting-edge technologies and a passion for premium web experiences.

**Special thanks to:**
- Next.js team for the incredible framework
- Vercel for seamless deployment
- Framer Motion for smooth animations
- Tailwind CSS for rapid styling

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with 💙 by [Mo Aarif](https://moaarif.in)

</div>
