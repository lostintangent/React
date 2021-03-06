var gulp = require("gulp");
var webpack = require("webpack");

["client", "server"].forEach(function (name) {
    gulp.task("build:" + name, function (done) {
        var config = require("./webpack." + name);
        webpack(config, function () { done(); });
    });
});

gulp.task("build", ["build:client", "build:server"]);
gulp.task("default", ["build"]);

if (process.env.NODE_ENV !== "production") {
    var nodemon = require("gulp-nodemon");
    var sh = require("shelljs");

    gulp.task("serve:nodemon", ["build"], function () {
        nodemon({
            script: "./dist/Server.js",
            tasks: "build-server",
            watch: "./src/Server.js"
        });
    });

    gulp.task("serve:webpack", function (done) {
        // The dev server's Node API doesn't support inline
        // mode so I'm just using the CLI to keep the config "clean"
        sh.exec("webpack-dev-server --hot --inline --colors --content-base='./src' --config='webpack.client.js'",
            function () { done(); });
    });
}