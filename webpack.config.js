var glob = require("glob");
var path = require("path");

module.exports = {
  entry: { components: glob.sync("./assets/components/**/*.js") }, // path to input files
  output: {
    filename: "index.js", // output bundle file name
    path: path.resolve(__dirname, "./static/js/bundles"), // path to our Django static directory
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
      },
    ],
  },
};
