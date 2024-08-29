const autoprefixer = require("autoprefixer");
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");

module.exports = function(eleventyConfig){
    // eleventyConfig.addPassthroughCopy("./src/css/");
    // eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/humans.txt");
    eleventyConfig.addPassthroughCopy("./src/robots.txt");
    eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/scripts");

    eleventyConfig.addPlugin(eleventySass, {
        postcss: postcss([autoprefixer])
    });

    return{
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
};