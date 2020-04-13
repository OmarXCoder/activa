var gulp = require("gulp");
var del = require("del");
var bower = require("../bower.json");

module.exports = function (options) {
    // Deletes HTML files from the (${layout}) directory
    // specified in (config/config.js)
    gulp.task("clean:html", function () {
        return del.sync(options.layoutDir + "/*.html");
    });

    // Deletes HTML files from all layouts
    gulp.task("clean:html:all", function () {
        options.layouts.forEach(function (layout) {
            return del.sync(layout.path + "/*.html");
        });
    });

    // Deletes CSS files from the (${layout}/css) directory
    gulp.task("clean:css", function () {
        return del.sync(options.layoutDir + "/css/*");
    });

    // Deletes CSS files from the (global/css) directory
    gulp.task("clean:css:global", function () {
        return del.sync(options.globalDir + "/css/*");
    });

    // Deletes CSS files from the (examples/css) directory
    gulp.task("clean:css:examples", function () {
        return del.sync(options.examplesDir + "/css/*");
    });

    // Deletes .css files from all layouts
    gulp.task("clean:css:layouts", function () {
        options.layouts.forEach(function (layout) {
            return del.sync(layout.path + "/css/*");
        });
    });

    // Runs all clean:css tasks
    gulp.task("clean:css:all", [
        "clean:css",
        "clean:css:global",
        "clean:css:examples",
    ]);

    // Cleans .css files from assets folder and from all layouts
    gulp.task("clean:css:all:layouts", [
        "clean:css:layouts",
        "clean:css:global",
        "clean:css:examples",
    ]);

    // - Deletes all files from the (assets/vendor/bower_components) directory
    //
    // - The directory path is specified in (bower.json) file
    // under (clean.bower_components)
    gulp.task("clean:bower", function () {
        return del.sync(bower.clean.bower_components);
    });

    // Removes (dist) directory
    gulp.task("clean:dist", function () {
        return del.sync(options.distDir);
    });
};
