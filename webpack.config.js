/**
 * External Dependencies
 */
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WebpackRTLPlugin = require("webpack-rtl-plugin");

// Environment Flag
const inProduction = "production" === process.env.NODE_ENV;

// Block CSS loader
const cssExtractTextPlugin = new ExtractTextPlugin({
  filename: "./block/build/style.css"
});

// Editor CSS loader
const editBlocksCSSPlugin = new ExtractTextPlugin({
  filename: "./build/editor.css"
});

// Configuration for the ExtractTextPlugin.
const extractConfig = {
  use: [
    { loader: "raw-loader" },
    {
      loader: "postcss-loader",
      options: {
        plugins: [require("autoprefixer")]
      }
    },
    {
      loader: "sass-loader"
    }
  ]
};

// Externals
const externals = {
  react: "React",
  lodash: "lodash"
};
// WordPress dependences
const wpDependencies = [
  "api-fetch",
  "components",
  "element",
  "blocks",
  "hooks",
  "editor",
  "utils",
  "date",
  "data",
  "i18n",
  "editPost",
  "plugins",
  "apiRequest"
];
wpDependencies.forEach(wpDependency => {
  externals["@wordpress/" + wpDependency] = {
    this: ["wp", wpDependency]
  };
});

// Webpack config.
const config = {
  entry: "./block/index.js",
  externals,
  output: {
    filename: "./block/build/script.js",
    path: __dirname,
    library: ["simple-container-block", "[name]"],
    libraryTarget: "this"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /editor\.s?css$/,
        use: editBlocksCSSPlugin.extract(extractConfig)
      },
      {
        test: /style\.s?css$/,
        use: cssExtractTextPlugin.extract(extractConfig)
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["block/build"]),
    editBlocksCSSPlugin,
    cssExtractTextPlugin,
    new WebpackRTLPlugin()
  ],
  stats: {
    children: false
  }
};

// For Productions
if (inProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ sourceMap: true }));
  config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
}

module.exports = config;