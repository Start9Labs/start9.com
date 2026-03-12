const faviconPlugin = require("eleventy-plugin-gen-favicons");
const format = require('date-fns/format')
const pluginSEO = require("eleventy-plugin-seo");
const tinysvg = require('@sardine/eleventy-plugin-tinysvg');
const slinkity = require('slinkity')

// for 404 callback
const fs = require("fs");
const NOT_FOUND_PATH = "_site/404.html";

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/images/');
  eleventyConfig.addPassthroughCopy('./src/assets/videos/');
  eleventyConfig.addPassthroughCopy('public')

  // plugins
  eleventyConfig.addPlugin(faviconPlugin, { outputDir: './public' });
  eleventyConfig.addPlugin(slinkity.plugin, slinkity.defineConfig({}))
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
  eleventyConfig.addPlugin(tinysvg, {
    baseUrl: 'src/_includes/svgs/',
  });

  // filters
  eleventyConfig.addFilter('date', function (date, dateFormat) {
    return format(date, dateFormat)
  })

  // 404 callback
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          if (!fs.existsSync(NOT_FOUND_PATH)) {
            throw new Error(`Expected a \`${NOT_FOUND_PATH}\` file but could not find one. Did you create a 404.html template?`);
          }

          const content_404 = fs.readFileSync(NOT_FOUND_PATH);
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: { input: "src", output: "_site", data: "_data" },
  };
};