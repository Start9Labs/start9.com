const faviconPlugin = require("eleventy-plugin-gen-favicons");
const format = require('date-fns/format')
const pluginSEO = require("eleventy-plugin-seo");
const tinysvg = require('@sardine/eleventy-plugin-tinysvg');
const slinkity = require('slinkity')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/images/');
  eleventyConfig.addPassthroughCopy('./src/assets/videos/');
  eleventyConfig.addPassthroughCopy('public')

  //plugins
  eleventyConfig.addPlugin(faviconPlugin, { outputDir: './public' });
  eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({}))
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
  eleventyConfig.addPlugin(tinysvg, {
    baseUrl: 'src/_includes/svgs/',
  });

  //filters
  eleventyConfig.addFilter('date', function (date, dateFormat) {
    return format(date, dateFormat)
  })

  return {
    dir: { input: "src", output: "_site", data: "_data" },
  };
};