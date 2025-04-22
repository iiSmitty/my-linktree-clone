# 🚀 My Linktree Clone - Dev Links Hub

[![Deploy to GitHub Pages](https://github.com/iiSmitty/my-linktree-clone/actions/workflows/deploy.yml/badge.svg)](https://github.com/iiSmitty/my-linktree-clone/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20On-GitHub%20Pages-blueviolet?logo=github)](https://linktr.andresmit.co.za)

A minimalist, Linktree-inspired landing page to consolidate important developer links, built with Astro and styled with a retro/terminal aesthetic.

**Live Demo:** [linktr.andresmit.co.za](https://linktr.andresmit.co.za)

---

## ✨ Features

- **Clean & Minimalist:** Focuses on presenting links clearly.
- **Retro Aesthetic:** Inspired by terminal interfaces and classic dev tools.
- **Responsive Design:** Adapts cleanly to mobile, tablet, and desktop screens.
- **Dark/Light Mode:** Persistent theme toggle using CSS variables and localStorage.
- **Pixel Art Ready:** Designed to nicely incorporate pixel art profile pictures.
- **Fast & Modern:** Built with [Astro](https://astro.build/) for excellent performance.
- **Easy Configuration:** Simple to update links and personal information.

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** CSS with CSS Variables
- **Interactivity:** Vanilla JavaScript
- **Deployment:** GitHub Actions & GitHub Pages

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/iiSmitty/my-linktree-clone.git
    cd my-linktree-clone
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open your browser to `http://localhost:4321` (or the port specified in the terminal).

## 🔧 Configuration

Customizing the site for your own use is straightforward:

- **Links:** Edit the `links` array within the frontmatter (`---` block) of `src/pages/index.astro`.
- **Profile Info:** Update your name and title/subtitle in `src/pages/index.astro`.
- **Profile Picture:**
  - Replace the image file at `public/images/me-in-pixels.png` with your own picture (ideally square, pixel art looks great!).
  - Update the `alt` text for the image in `src/pages/index.astro`.
  - _Note: Currently uses standard `<img>` tags due to a workaround, not Astro's `<Image>` component._
- **Social Media Links (Footer):**
  - Update the `href` attributes for the GitHub/LinkedIn links in `src/components/Footer.astro`.
  - Replace the icon images in `public/icons/` if needed and update the `src` attribute in `src/components/Footer.astro`.
- **Theme Toggle Icons (Header):**
  - Replace the SVG files in `public/icons/` (e.g., `batman.svg`, `superman.svg`).
  - Update the corresponding import paths in `src/components/Header.astro` if you change filenames.
- **Custom Domain:** If deploying elsewhere or changing the domain, update `site` and potentially `base` (if needed) in `astro.config.mjs`.

## 🌐 Deployment

This site is automatically deployed to [GitHub Pages](https://pages.github.com/) via [GitHub Actions](https://github.com/features/actions).

- **Source:** The deployment workflow is defined in `.github/workflows/deploy.yml`.
- **Trigger:** Pushing to the `main` branch triggers a build and deployment.
- **Configuration:** The site is configured in `astro.config.mjs` to deploy to the custom domain `linktr.andresmit.co.za`.

## 🙏 Inspiration & Credits

The visual design and core layout concept were heavily inspired by the clean, retro aesthetic of [MarioDev's personal site](https://mariodev.xyz/). Special thanks to Mario for the great design!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](license.txt) file for details.

---

_Feel free to fork, modify, and use for your own link hub!_
