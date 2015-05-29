var gulp = require("gulp");
var nodemon = require("gulp-nodemon");
var sh = require("shelljs");
var webpack = require("webpack");

// Initialize the client and server build tasks
["client", "server"].forEach(function (name) {
    gulp.task("build:" + name, function (done) {
        var config = require("./webpack." + name);
        webpack(config, function () { done(); });
    });
});

gulp.task("build", ["build:client", "build:server"]);

gulp.task("serve:dev:nodemon", ["build"], function () {
    nodemon({
        script: "./dist/Server.js",
        tasks: "build-server",
        watch: "./src/Server.js"
    });
});

gulp.task("serve:dev:webpack", function (done) {
    // The dev server's Node API doesn't support inline
    // mode so I'm just using the CLI to keep the config "clean"
    sh.exec("webpack-dev-server --hot --inline --colors --content-base='./src' --config='webpack.client.js'",
        function () { done(); });
});

gulp.task("default", ["serve:dev:nodemon"]);