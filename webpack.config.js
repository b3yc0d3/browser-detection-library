const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const fs = require("fs");

const p_build = path.join(__dirname, "build");

if (!fs.existsSync(p_build)) {
    fs.mkdirSync(p_build);
}

module.exports = {
    mode: "production",
    target: "web",
    devtool: "source-map",
    entry: {
        "bdl": path.resolve(__dirname, "/src/index.js"),
        "bdl.min": path.resolve(__dirname, "/src/index.js"),
    },
    output: {
        path: p_build,
        filename: "[name].js",
        libraryTarget: "umd",
        library: "bdl"
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            include: /\.min.js$/
        })]
    }
}