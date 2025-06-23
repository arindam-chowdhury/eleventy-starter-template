const autoprefixer = require("autoprefixer");
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");
const { DateTime } = require("luxon"); // Import Luxon for date formatting


module.exports = function (eleventyConfig) {
  // Passthrough copies for static files not processed by Eleventy
  eleventyConfig.addPassthroughCopy("./src/humans.txt");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  eleventyConfig.addPlugin(eleventySass, {
    postcss: postcss([autoprefixer]),
  });

    // Add a custom Nunjucks filter for date formatting
  eleventyConfig.addNunjucksFilter("date", (dateObj, format) => {
    // If dateObj is "now", use current date, otherwise use the provided dateObj
    const dateToFormat = dateObj === "now" ? DateTime.now() : DateTime.fromJSDate(dateObj);
    return dateToFormat.toFormat(format);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes", 
      data: "_data",
    },
  };
};