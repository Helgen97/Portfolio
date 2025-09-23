# Dmytro Donchenko Portfolio

## Overview

This is a personal portfolio Single Page Application (SPA) for Dmytro Donchenko, showcasing full-stack development skills in Java and React. The portfolio highlights projects, skills, experience, education, and contact information in a responsive, accessible, and visually appealing format.

- **Live Demo**: [dmytro-donchenko.pp.ua](https://www.dmytro-donchenko.pp.ua)
- **Source Code**: [GitHub Repository](https://github.com/Helgen97/portfolio)

## Features

- **Responsive Design**: Optimized for mobile and desktop devices with a mobile-first approach.
- **Accessible Navigation**: Includes a mobile menu with toggle functionality and a desktop menu, enhanced with ARIA attributes for screen reader support.
- **Smooth Scrolling**: Uses `react-scroll` for seamless navigation between sections (About, Skills, Projects, Experience, Education, Contacts).
- **Progressive Web App (PWA)**: Supports offline functionality and installation via `vite-plugin-pwa`.
- **SEO Optimization**: Includes a sitemap (`sitemap.xml`), meta image, and favicon assets for better search engine visibility.
- **Interactive Components**: Features animated transitions for skills, projects, and other sections to enhance user experience.
- **Modular Architecture**: Organized React components for easy maintenance and scalability.

## Project Structure

```
portfolio/
├── public/                     # Static assets
│   ├── favicon/                # Favicon and PWA icons
│   ├── files/                  # Static files (e.g., cv.pdf)
│   ├── CNAME                   # Custom domain configuration
│   ├── metaImage.png           # SEO meta image
│   └── sitemap.xml             # SEO sitemap
├── src/                        # Source code
│   ├── app/                    # Main application component
│   │   └── Application.jsx
│   ├── components/             # React components
│   │   ├── additional_components/  # Reusable UI components
│   │   │   ├── aboutMeBlock/
│   │   │   ├── contactBlock/
│   │   │   ├── contentComponents/  # Section content components
│   │   │   ├── desktopMenu/
│   │   │   ├── educationBlock/
│   │   │   ├── experienceBlock/
│   │   │   ├── headerLogo/
│   │   │   ├── helpButtons/
│   │   │   ├── menuList/
│   │   │   ├── mobileMenu/
│   │   │   ├── mobileMenuButton/
│   │   │   ├── mobileMenuCloseButton/
│   │   │   ├── mobileMenuContent/
│   │   │   ├── observerBlock/
│   │   │   ├── projectBlock/
│   │   │   ├── scrollLink/
│   │   │   ├── skillGroupList/
│   │   │   ├── skillsGroup/
│   │   │   └── toTopButtonContainer/
│   │   ├── main_components/     # Core layout components
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── mainSection/
│   │   │   ├── section/
│   │   │   └── sectionsList/
│   │   └── svg/                # SVG icon components
│   ├── constants/              # Static content data
│   │   └── content.js
│   ├── images/                 # Image assets (e.g., me.jpg)
│   ├── styles/                 # SCSS styles
│   │   └── index.scss
│   └── index.jsx               # Entry point
├── .gitignore                  # Git ignore file
├── index.html                  # HTML entry point
├── package.json                # Project metadata and dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## Technologies Used

- **Frontend**: React 18.2.0, React Scroll 1.9.3
- **Styling**: SCSS (Sass 1.92.1), Normalize.css 8.0.1
- **Accessibility**: MUI Base 5.0.0-beta.70 for click-away listener
- **Build Tool**: Vite 7.1.5 with `vite-plugin-pwa` for PWA support
- **Deployment**: GitHub Pages via `gh-pages` 6.3.0

## Setup Instructions

### Prerequisites

- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

### Build

To create a production build:

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview

To preview the production build locally:

```bash
npm run preview
```

### Deploy

To deploy to GitHub Pages:

```bash
npm run deploy
```

### Linting

To run ESLint for code quality checks:

```bash
npm run lint
```

## Deployment

The portfolio is deployed to a custom domain (`dmytro-donchenko.pp.ua`) using GitHub Pages. The `CNAME` file in the `public/` folder configures the custom domain, and the `predeploy` and `deploy` scripts handle the deployment process.

- **Homepage**: Configured in `package.json` as `https://www.dmytro-donchenko.pp.ua`.
- **Sitemap**: `public/sitemap.xml` improves SEO.
- **Favicon and PWA**: Icons in `public/favicon/` support various devices and PWA installation.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code follows the ESLint rules and includes appropriate documentation.

## Contact

For inquiries, reach out via:

- **Email**: [dmytro.donchenko97@gmail.com]
- **GitHub**: [Your GitHub profile](https://github.com/Helgen97)
- **Portfolio**: [dmytro-donchenko.pp.ua](https://www.dmytro-donchenko.pp.ua)
