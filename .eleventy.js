const eleventySass = require("eleventy-sass");
//const gsap = require('gsap');

module.exports = function (eleventyConfig) {

  // passthrus
  //eleventyConfig.addPassthroughCopy("./src/assets/styles");

  eleventyConfig.addPassthroughCopy('src/assets/fonts');
  eleventyConfig.addPassthroughCopy("./src/assets/js");
  eleventyConfig.addPassthroughCopy('src/assets/images/**/*.png');
  eleventyConfig.addPassthroughCopy('src/assets/images/**/*.svg');
  eleventyConfig.addPassthroughCopy('src/assets/images/**/*.jpg');
  eleventyConfig.addPassthroughCopy('src/assets/images/**/*.gif');

  //eleventyConfig.addNunjucksFilter('bitcoin', arr => arr.filter(e => e.name == 'Synapse'));

  //plugins
  eleventyConfig.addPlugin(eleventySass);

  return {
    dir: { input: "src", output: "_site", data: "_data" },
  };
};
