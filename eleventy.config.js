export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("views/assets/css"); 
    eleventyConfig.addPassthroughCopy("views/assets/img"); 
    eleventyConfig.addPassthroughCopy("views/assets/js");

    // SHORTCODES
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
};

export const config = {

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
        input: "views",
        layouts: "_layouts",
        output: "dist"
    }
};