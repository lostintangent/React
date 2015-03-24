var webpack = require("webpack");

module.exports = {
    entry: "./src/Client/Browser.js",
    output: {
        path: "./dist/assets",
        filename: "Browser.js",
        devtoolModuleFilenameTemplate: "[resource-path]",
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel?optional=runtime&experimental=true"] }
        ]
    },
    resolve: {
        alias: {
            react$: "react/addons"
        }
    },
    devtool: "source-map"
};