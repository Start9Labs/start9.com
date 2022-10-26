const eleventySass = require("eleventy-sass");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const faviconPlugin = require("eleventy-favicon");

// https://github.com/artstorm/eleventy-plugin-seo
const pluginSEO = require("eleventy-plugin-seo");

// https://github.com/saneef/eleventy-plugin-img2picture
const img2picture = require("eleventy-plugin-img2picture");

// https://www.npmjs.com/package/@sardine/eleventy-plugin-tinycss
const tinyCSS = require('@sardine/eleventy-plugin-tinycss');

// https://www.npmjs.com/package/@sardine/eleventy-plugin-tinysvg
const tinysvg = require('@sardine/eleventy-plugin-tinysvg');

// https://www.npmjs.com/package/@sardine/eleventy-plugin-tinyhtml
const tinyHTML = require('@sardine/eleventy-plugin-tinyhtml');

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy("./src/assets/js");


  if (process.env.ELEVENTY_ENV === "enable-image-optim") {
    // img2picture (recommend not enabling)
    ////// this plugin smartly optimizes images on build, such as converting pngs to smaller jpegs. 
    ////// did not see noticable speed gains when enabled, but it did cause rendering issues on older versions of Safari (e.g. on Calalina).
    ////// specifially, jpeg masking (as a replacement for alpha pngs) doesn't seem to work for all browsers.
    eleventyConfig.addPlugin(img2picture, {
      // Should be same as Eleventy input folder set using `dir.input`.
      eleventyInputDir: "src",

      // Output folder for optimized images.
      imagesOutputDir: "_site/assets/images",

      // URL prefix for images src URLS.
      // It should match with path suffix in `imagesOutputDir`.
      // Eg: imagesOutputDir with `_site/images` likely need urlPath as `/images/`
      urlPath: "/assets/images/",
      sharpPngOptions: { pallette: true },
      sharpJpegOptions: { quality: 100 }
    });
  } else {
    // During development, copy the files to Eleventy's `dir.output`
    eleventyConfig.addPassthroughCopy('./src/assets/images/');
  }

  //plugins
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(faviconPlugin, { destination: './_site' });
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
  //eleventyConfig.addPlugin(tinyCSS); // smartly injects selectors from external css files into style tags. requires some massaging. not ready for prime time.
  eleventyConfig.addPlugin(tinyHTML);
  eleventyConfig.addPlugin(tinysvg, {
    baseUrl: 'src/_includes/svgs/',
  });

  eleventyConfig.addWatchTarget('./src/assets/styles/**/*')

  return {
    dir: { input: "src", output: "_site", data: "_data" },
  };
};