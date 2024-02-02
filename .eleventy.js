const eleventyVue = require("@11ty/eleventy-plugin-vue"); // import the plugin

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyVue); // tell Eleventy about the plugin
  // Return your Object options:
  return {
    dir: {
      input: "eleventy",
      output: "express/public"
    }
  }
}