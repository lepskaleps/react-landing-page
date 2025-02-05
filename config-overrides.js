const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@js": path.resolve(__dirname, "public/assets/js"),
  }),
  (config) => {
    config.output = {
      ...config.output,
      path: path.resolve(__dirname, "public/assets/js"),
      filename: "bundle.js",
    };
    return config;
  }
);
