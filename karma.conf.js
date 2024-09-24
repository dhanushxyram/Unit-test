// Karma configuration
// Generated on Mon Aug 26 2024 18:02:33 GMT+0530 (India Standard Time)
const webpack = require("webpack");
module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",
 
    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ["jasmine"],
 
    // list of files / patterns to load in the browser
    files: ["src/**/*.spec.js", "tests/**/*.spec.js"],
 
    // files: [
    //   'src/tests/**/*.spec.js',
    // ],
 
    // list of files / patterns to exclude
    exclude: [],
 
    browserDisconnectTimeout: 10000,
    browserNoActivityTimeout: 30000,
    captureTimeout: 60000,
 
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://www.npmjs.com/search?q=keywords:karma-preprocessor
    preprocessors: {
      "src/**/*.spec.js": ["webpack"],
      "tests/**/*.spec.js": ["webpack"],
    },
    webpack: {
      // your webpack configuration
      mode: "development",
      resolve: {
   
      },
      plugins: [
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        }),
      ],
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
    },
 
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ["progress", "kjhtml"],
 
    // web server port
    port: 9876,
 
    // enable / disable colors in the output (reporters and logs)
    colors: true,
 
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // logLevel: config.LOG_DEBUG,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
 
    // start these browsers
    // available browser launchers: https://www.npmjs.com/search?q=keywords:karma-launcher
    browsers: ["Chrome"],
 
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
 
    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: Infinity,
 
    client: {
      clearContext: false,
    },
  });
};