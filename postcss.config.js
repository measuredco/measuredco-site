module.exports = {
  plugins:
    process.env.NODE_ENV === "production"
      ? [require("autoprefixer"), require("cssnano"), require("postcss-import")]
      : [require("autoprefixer"), require("postcss-import")],
};
