var path = require("path");

var config = {
  mode: process.env.NODE_ENV,
  /* The entry point of the application. Webpack uses this information to
  create the dependency tree which is used to bundle the scripts.*/
  entry: ['./src/index.tsx'],

  /* This information is used to give the name of the bundled file and the
  location of the bundled file. */
  output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
  },

  /* This information is used to give the port and dev server */
  optimization: {
     splitChunks: {
       chunks: 'all',
     },
   },

  /*  The extensions which will be imported or required in the application
  scripts. */
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: 'source-map-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              import: true,
              modules: true,
              localIdentName:
                process.env.NODE_ENV === 'development'
                  ? '[local]__[hash:base64:5]'
                  : '[hash:base64]',
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = config;
