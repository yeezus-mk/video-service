const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssFocus = require('postcss-focus');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };
  if (isProd) {
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }
  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].bundle.[contenthash].${ext}`);

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            'postcss-preset-env',
            postcssFocus(),
            autoprefixer(),
          ],
        },
      },
    },
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
    },
  ];
  if (isDev) {
    loaders.push({
      loader: 'eslint-loader',
      options: {
        fix: true,
      },
    });
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.jsx', './index.css'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'public'),
  },
  devtool: isDev ? 'source-map' : false,
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDev,
    contentBase: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/'),
          to: path.resolve(__dirname, 'public/assets'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new StylelintPlugin({
      syntax: 'css',
      fix: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
    ],
  },
};
