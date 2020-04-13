var gulp = require("gulp");

var $ = require("gulp-load-plugins")({
    pattern: ["gulp-*", "gulp.*", "del"],
});

module.exports = function (options) {
    // minifies CSS, uglifies JS and minifies HTML
    // from the specified ${layout} and
    // copy them to the dist folder
    gulp.task("build:html", function () {
        return gulp
            .src(
                [
                    options.layoutDir + "/**/*",
                    "!" + options.layoutDir + "/**/{scss,scss/**}",
                    "!" + options.layoutDir + "/**/{templates,templates/**}",
                ],
                { base: "./" + options.srcDir + "/" }
            )
            .pipe($.if("*.html", $.htmlmin({ collapseWhitespace: true })))
            .pipe($.if("*.css", $.cssnano({ safe: true, autoprefixer: false })))
            .pipe($.if("*.js", $.uglify()))
            .pipe(gulp.dest(options.distDir));
    });

    // minifies CSS, uglifies JS and minifies HTML
    // from all layout folders and copy
    // them to the dist folder
    gulp.task("build:html:all", function () {
        return options.layouts.forEach(function (layout) {
            return gulp
                .src(
                    [
                        layout.path + "/**/*",
                        "!" + layout.path + "/**/{scss,scss/**}",
                        "!" + layout.path + "/**/{templates,templates/**}",
                    ],
                    { base: "./" + options.srcDir + "/" }
                )
                .pipe($.if("*.html", $.htmlmin({ collapseWhitespace: true })))
                .pipe(
                    $.if(
                        "*.css",
                        $.cssnano({ safe: true, autoprefixer: false })
                    )
                )
                .pipe($.if("*.js", $.uglify()))
                .pipe(gulp.dest(options.distDir));
        });
    });

    // minifies CSS, uglifies JS, optimizes SVGs
    // from assets folder and copy
    // them to dist folder
    gulp.task("build:assets", function () {
        return gulp
            .src(
                [
                    options.assetsDir + "/**/*",
                    "!" + options.assetsDir + "/**/*.html",
                    "!" + options.assetsDir + "/**/*.scss",
                    "!" + options.assetsDir + "/**/{scss,scss/**}",
                ],
                { base: "./" + options.srcDir + "/" }
            )
            .pipe($.if("*.css", $.cssnano({ safe: true, autoprefixer: false })))
            .pipe($.if("*.js", $.uglify()))
            .pipe($.if("**/svg/*.svg", $.svgo()))
            .pipe(gulp.dest(options.distDir));
    });

    // copies extra files from the base (src) directory
    // to the (base) dist folder
    gulp.task("copy:extra", function () {
        return gulp
            .src(options.srcDir + "/*.*")
            .pipe($.if("*.html", $.htmlmin({ collapseWhitespace: true })))
            .pipe(gulp.dest(options.distDir));
    });

    gulp.task("build", [
        "clean:dist",
        "build:assets",
        "build:html",
        "copy:extra",
    ]);
    gulp.task("build:all", [
        "clean:dist",
        "build:assets",
        "build:html:all",
        "copy:extra",
    ]);
};
