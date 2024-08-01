#!/usr/bin/env node

console.log("Running webpack.config.js");

const path = require("path");
const Dotenv = require("dotenv-webpack");

console.log("Required modules loaded");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

console.log("Webpack configuration exported");
