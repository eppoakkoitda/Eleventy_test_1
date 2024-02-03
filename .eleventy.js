// const eleventyVue = require("@11ty/eleventy-plugin-vue"); // import the plugin

module.exports = function(eleventyConfig) {
  // eleventyConfig.addPlugin(eleventyVue); // tell Eleventy about the plugin
  eleventyConfig.addTransform("add-html-doctype", (content, outputPath) => {
    let doctype = "<!doctype html>";
    // If we’re writing to an HTML file and a Doctype does not already exist
    if(outputPath.endsWith(".html") && !content.trim().toLowerCase().startsWith(doctype)) {
      return `${doctype}${content}`;
    }
    return content;
  });
  // Return your Object options:
  return {
    dir: {
      input: "eleventy",
      output: "express/public"
    }
  }
}