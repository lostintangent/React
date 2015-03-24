var gulp = require("gulp");

var webpack = require("webpack");
gulp.task("build-client", function (done) {  
    var config = require("./webpack.client.js");
    webpack(config, function (error, stats) {
        done();
    });
});

gulp.task("build-server", function (done) {
    var config = require("./webpack.server.js");
    webpack(config, function (error, stats) {
        done();
    });
});

var nodemon = require("gulp-nodemon");
gulp.task("serve", ["build"], function () {
    nodemon({
        script: "./dist/Server.js",
        watch: ["./src/Server"],
        tasks: ["build-server"]
    });
});

var sh = require("shelljs");
gulp.task("serve-webpack", function (done) {
    // The dev server's Node API doesn't support inline
    // mode so I'm just using the CLI to keep the config "clean"
    sh.exec("webpack-dev-server --hot --inline --colors --content-base='./src' --config='webpack.client.js'",
        function () { done(); });
});

gulp.task("build", ["build-client", "build-server"]);
gulp.task("default", ["build"]);