const eleventySass = require("eleventy-sass");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const faviconPlugin = require("eleventy-favicon");
const pluginSEO = require("eleventy-plugin-seo");

// https://www.npmjs.com/package/eleventy-plugin-img2picture
const img2picture = require("eleventy-plugin-img2picture");

// https://www.npmjs.com/package/@sardine/eleventy-plugin-tinycss
const tinyCSS = require('@sardine/eleventy-plugin-tinycss');

// https://www.npmjs.com/package/@sardine/eleventy-plugin-tinysvg
const tinysvg = require('@sardine/eleventy-plugin-tinysvg');

// https://www.npmjs.com/package/@sardine/eleventy-plugin-tinyhtml
const tinyHTML = require('@sardine/eleventy-plugin-tinyhtml');

module.exports = function (eleventyConfig) {

  // passthrus
  //eleventyConfig.addPassthroughCopy("./src/assets/styles");

  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  // eleventyConfig.addPassthroughCopy('src/assets/images/**/*.png');
  // eleventyConfig.addPassthroughCopy('src/assets/images/**/*.svg');
  // eleventyConfig.addPassthroughCopy('src/assets/images/**/*.jpg');
  // eleventyConfig.addPassthroughCopy('src/assets/images/**/*.gif');


  if (false) {//(process.env.ELEVENTY_ENV === "production") {
    eleventyConfig.addPlugin(img2picture, {
      // Should be same as Eleventy input folder set using `dir.input`.
      eleventyInputDir: "src",

      // Output folder for optimized images.
      imagesOutputDir: "_site/assets/images",

      // URL prefix for images src URLS.
      // It should match with path suffix in `imagesOutputDir`.
      // Eg: imagesOutputDir with `_site/images` likely need urlPath as `/images/`
      urlPath: "/assets/images/",
    });
  } else {
    // During development, copy the files to Eleventy's `dir.output`
    eleventyConfig.addPassthroughCopy("_site/assets/images");
  }

  //plugins
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(faviconPlugin, { destination: './_site' });
  eleventyConfig.addPlugin(pluginSEO, require("./src/_data/seo.json"));
  //eleventyConfig.addPlugin(tinyCSS);
  eleventyConfig.addPlugin(tinyHTML);
  eleventyConfig.addPlugin(tinysvg, {
    baseUrl: 'src/_includes/components/svg/',
  });

  // eleventyConfig.addPlugin(lazyImagesPlugin, {
  //   imgSelector: 'img:not(.unlazy)', // custom image selector
  //   //cacheFile: '', // don't cache results to a file
  // });

  return {
    dir: { input: "src", output: "_site", data: "_data" },
  };
};

// module.exports = function (eleventyConfig) {
//   if (process.env.ELEVENTY_ENV === "production") {
//     eleventyConfig.addPlugin(img2picture, {
//       // Should be same as Eleventy input folder set using `dir.input`.
//       eleventyInputDir: ".",

//       // Output folder for optimized images.
//       imagesOutputDir: "_site",

//       // URL prefix for images src URLS.
//       // It should match with path suffix in `imagesOutputDir`.
//       // Eg: imagesOutputDir with `_site/images` likely need urlPath as `/images/`
//       urlPath: "",
//     });
//   } else {
//     // During development, copy the files to Eleventy's `dir.output`
//     eleventyConfig.addPassthroughCopy("./images");
//   }
// };