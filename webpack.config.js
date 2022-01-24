
// we need to tell it where to find the javascript that we're going to minimize / bundle our code
const path = require("path");
const webpack = require("webpack");
module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'  // tells us its going into directory 'dist' and it will be named main.bundle.js
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery" // we are telling webpack to undertstand that these global variables, jquery and $, belong to jquery
        }),
    ],
    mode: 'development'
};