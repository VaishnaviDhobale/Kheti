const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : "development",
  entry: "./src/index.js",
  devtool : "inline-source-map",
  target: 'electron-renderer', // Target Electron main process for bundling
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Transpile JavaScript/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                [
                  "@babel/preset-react",
                  {
                    runtime: "automatic"  // Enable the new JSX transform
                  }
                ]
              ]
          },
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ['style-loader', 'css-loader', 'postcss-loader'], // PostCSS with Tailwind
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/, // Load images and fonts
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve .js and .jsx extensions automatically
  },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: './public/index.html', // The HTML template to inject your React app
//       inject: true, // Injects assets into the HTML
//     }),
//   ],
  output: {
    filename: 'index.js', // Separate bundles for main and renderer
    path: path.resolve(__dirname, 'build'),
    clean: true, // Clean the dist folder before each build
  },
}; 