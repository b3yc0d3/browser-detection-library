const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        "bdl": "./src/index.js",
        "bdl.min": "./src/index.js",
    },
    output: {
        path: "./",
        filename: '[name].js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            include: /\.min.js$/
        })]
    }
}