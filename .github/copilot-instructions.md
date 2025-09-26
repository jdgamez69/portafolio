# Copilot Instructions for Portfolio Codebase

## Overview
This is a static portfolio website built with HTML, CSS, and JavaScript. It uses the Start Bootstrap Freelancer theme (v7.0.7) and Bootstrap 5.2.3 for layout and styling. The site showcases professional experience, projects, and contact information.

## Key Files & Structure
- `index.html`: Main entry point. Contains all page sections (navigation, masthead, portfolio, about, contact).
- `css/styles.css`: Custom and theme CSS. Extends Bootstrap and Start Bootstrap Freelancer styles.
- `js/scripts.js`: Handles navbar behavior, scrollspy, and responsive navigation. Uses Bootstrap JS features.
- `assets/img/portfolio/`: Contains images for portfolio and profile.
- `assets/archivos/`: Contains downloadable files (e.g., CV PDF).

## Patterns & Conventions
- **Theme Customization**: Most styles and scripts are adapted from Start Bootstrap Freelancer. Customizations are made in `styles.css` and `index.html`.
- **Section Anchors**: Navigation links use section IDs (`#portfolio`, `#about`, `#contact`).
- **Responsive Design**: Uses Bootstrap grid and utility classes for mobile compatibility.
- **Image Usage**: Images are referenced with relative paths from `assets/img/portfolio/`.
- **No Build Step**: This project is static; no build tools or package managers are used. All dependencies are loaded via CDN.
- **No Automated Tests**: There are no test scripts or frameworks present.

## Developer Workflow
- **Preview**: Open `index.html` in a browser to view changes.
- **Edit**: Modify content in `index.html`, styles in `css/styles.css`, and behavior in `js/scripts.js`.
- **Add Assets**: Place new images in `assets/img/portfolio/` and downloadable files in `assets/archivos/`.
- **No Compilation**: Changes are reflected immediately; no build or deploy commands required.

## Integration Points
- **Bootstrap**: Loaded via CDN in `index.html`.
- **Font Awesome**: Icons loaded via CDN.
- **Google Fonts**: Montserrat and Lato fonts loaded via CDN.

## Project-Specific Advice
- Maintain the section structure in `index.html` for navigation to work.
- When adding new portfolio items, follow the markup pattern in the portfolio section.
- For new styles, extend or override in `css/styles.css` rather than editing theme files directly.
- For new scripts, add to `js/scripts.js` and ensure DOMContentLoaded event is used for initialization.

## Example: Adding a Portfolio Item
1. Place the image in `assets/img/portfolio/`.
2. Add a new grid item in the portfolio section of `index.html` following the existing markup.

---

If any conventions or workflows are unclear, please request clarification or examples from the user.