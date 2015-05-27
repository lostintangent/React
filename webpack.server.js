var webpack = require("webpack");
var fs = require("fs");

var nodeModules = {};
fs.readdirSync("./node_modules")
    .filter(function (mod) {
        return mod.indexOf(".bin") === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = "commonjs " + mod;
    });

nodeModules["react"] = "commonjs react/addons";

module.exports = {
    entry: "./src/server/Server.js",
    output: {
        path: "./dist",
        filename: "Server.js",
        devtoolModuleFilenameTemplate: "[resource-path]"
    },
    target: "node",
    externals: nodeModules,
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel?optional=runtime&stage=0" }
        ]
    },
    devtool: "source-map",
    plugins: [
        // This ensures that runtime errors display properly mapped stacks
        new webpack.BannerPlugin("require('source-map-support').install();", {
            raw: true,
            entryOnly: true
        })
    ]
};