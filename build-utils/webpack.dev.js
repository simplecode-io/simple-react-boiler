const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "..", "./.env.development"),
    }),
  ],
  devtool: "eval-source-map",
};
