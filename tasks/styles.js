"use strict";
// const options = require("../config/gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();

function styles(callback) {
    gulp.src(["src/assets/custom/scss/*.scss"])
        .pipe(sass.sync().on("error", sass.logError))
        // .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest("src/assets/css"))
        .pipe(browserSync.stream());

    callback();
}

exports.sass = styles;
