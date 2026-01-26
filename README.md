# Blockchain Developer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and a clean dark UI.

## Features

- **Modern Design**: Clean, dark-themed UI with gradient accents
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations throughout
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Sections**:
  - Hero with gradient text effects
  - About Me with stats and highlights
  - Experience timeline
  - Featured projects showcase
  - Skills with progress bars
  - Contact information with social links

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Contact Details**: Update email, phone, and social links in:
   - [components/Hero.tsx](components/Hero.tsx)
   - [components/Contact.tsx](components/Contact.tsx)

2. **Experience**: Modify work history in [components/Experience.tsx](components/Experience.tsx)

3. **Projects**: Add/update projects in [components/Projects.tsx](components/Projects.tsx)

4. **Skills**: Update skill levels and categories in [components/Skills.tsx](components/Skills.tsx)

5. **About Me**: Edit personal description and stats in [components/About.tsx](components/About.tsx)

### Color Scheme

The portfolio uses a blue-to-purple gradient theme. To customize colors, update the Tailwind classes throughout the components or modify [tailwind.config.ts](tailwind.config.ts).

## Project Structure

```
myPortfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills section
│   └── Contact.tsx         # Contact section
└── public/                 # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway
- Render

## License

This project is open source and available for personal use.

## Contact

- Email: dhanyosmiresearcher@gmail.com
- Phone: +91 6204238614
- Timezone: IST (GMT +5:30)
