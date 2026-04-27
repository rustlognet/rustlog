import { DateTime } from "luxon";
import pluginRss from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("views/assets/css");
    eleventyConfig.addPassthroughCopy("views/assets/img");
    eleventyConfig.addPassthroughCopy("views/assets/js");

    // SHORTCODES
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // FILTERS (requires luxon)
    eleventyConfig.addFilter("date", (dateObj, format = "iiii-LL-dd", locale = "en-GB") => {
        return DateTime.fromJSDate(dateObj).setLocale(locale).toFormat(format);
    });

    // Plugins
    eleventyConfig.addPlugin(pluginRss);

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