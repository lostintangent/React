var webpack = require("webpack");

module.exports = {
    entry: "./src/client/Browser.js",
    output: {
        path: "./dist/assets",
        filename: "Browser.js",
        devtoolModuleFilenameTemplate: "[resource-path]",
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ["react-hot", "babel?optional=runtime&stage=0"] }
        ]
    },
    resolve: {
        alias: {
            react$: "react/addons"
        }
    },
    devtool: "source-map"
};