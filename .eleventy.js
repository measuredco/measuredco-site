module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/*.woff2");
  eleventyConfig.addPassthroughCopy("./src/*.svg");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/favicon.png");

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
    passthroughFileCopy: true,
  };
};
