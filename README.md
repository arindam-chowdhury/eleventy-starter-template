# Eleventy Project Template

This is a base-level starter template for building static websites using [Eleventy](https://www.11ty.dev/). It includes basic configurations for Sass, PostCSS with Autoprefixer, and various pass-through copies for assets and meta files.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Customization](#customization)

## Installation

To get started, clone this repository and install the dependencies:

```bash
git clone <repository-url> eleventy-project-template
cd eleventy-project-template
npm install
```
## Scripts

The following npm scripts are available for development and production builds:

- **`npm start`**: Runs Eleventy in watch mode with a live server. It rebuilds the site whenever you make changes to the source files.

- **`npm run build`**: Builds the site without starting a live server. Useful for generating the site for production.

- **`npm run final`**: Builds the site with the output directory set to `_final`. This can be used to differentiate between development and final production builds.

## Configuration

### `.eleventy.js`

The `.eleventy.js` file configures Eleventy with the following settings:

- **Passthrough File Copy**: Copies specific files and directories to the output without processing. This includes:
  - `humans.txt`
  - `robots.txt`
  - `sitemap.xml`
  - `assets` directory
  - `scripts` directory

- **Sass Processing**: Uses the `eleventy-sass` plugin to process `.scss` files with PostCSS and Autoprefixer, ensuring compatibility across the last 4 versions of browsers.

```javascript
const autoprefixer = require("autoprefixer");
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/humans.txt");
    eleventyConfig.addPassthroughCopy("./src/robots.txt");
    eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/scripts");

    eleventyConfig.addPlugin(eleventySass, {
        postcss: postcss([autoprefixer])
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};
```

## Usage

1. **Development**: To start developing, run `npm start`. This command will start a local server at `http://localhost:8080/` and watch for any changes in your source files, automatically rebuilding the site when changes are detected.

2. **Production Build**: To build the site for production, run `npm run build`. This will output the static files to the `_site` directory.

3. **Final Build**: To create a final build with a different output directory, run `npm run final`. This will output the static files to the `_final` directory.

## Directory Structure

The template follows a basic directory structure:

```bash
eleventy-project-template/ 
├── src/ 
│   ├── _data/ # Directory for global data files 
│   ├── _includes/ # Directory for reusable components (e.g., layouts, partials) 
│   ├── assets/ # Static assets (images, fonts, etc.) 
│   ├── stylesheets/ # Stylesheets, possibly Sass or CSS files 
│   ├── userDetails/ # User-specific details or data 
│   ├── humans.txt # Meta file 
│   ├── index.njk # Main template file 
│   ├── robots.txt # Meta file 
│   └── sitemap.xml # Sitemap file 
├── .eleventy.js # Eleventy configuration file 
├── .gitignore # Git ignore file 
├── package-lock.json # Auto-generated lock file for exact dependency versions 
├── package.json # Project metadata and dependencies 
└── README.md # Project information and usage instructions
```

## Customization

Feel free to modify the project structure, configuration, or add additional plugins to tailor the setup to your specific needs. For more information on how to use and configure Eleventy, visit the [official documentation](https://www.11ty.dev/docs/).
