// .babelrc : Configuration File
// "presets: ["env"] -> Look at browser and determine what plugins and babel tools we need to be able to transpile from whatever version of JS we wrote our code in to whatever version of js that can be executed in browser

require("babel-register");
require("babel-polyfill");
require("./src/server");
