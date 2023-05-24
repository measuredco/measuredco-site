module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/*.woff2");
  eleventyConfig.addPassthroughCopy("./src/*.svg");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/favicon.png");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/social.png");

  return {
    dir: {
      input: "./src",
      output: "./dist",
    },
    passthroughFileCopy: true,
  };
};
