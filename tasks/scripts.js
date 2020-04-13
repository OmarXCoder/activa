const gulp = require("gulp");
const browserSync = require("browser-sync").create();

function scripts(callback) {
    gulp.src("assets/**/*.js").pipe(browserSync.stream());

    callback();
}

exports.scripts = scripts;

// module.exports = function (options) {
//     // used for js files that are in the (${layout}/assets/js) directory
//     gulp.task("scripts", function () {
//         return gulp
//             .src(options.layoutDir + "/js/*.js")
//             .pipe(browserSync.stream());
//     });

//     // used for js files that are in the (global/js) directory
//     gulp.task("scripts:global", function () {
//         return gulp
//             .src(options.globalDir + "/js/*.js")
//             .pipe(browserSync.stream());
//     });

//     // used for js files that are in the (examples/js) directory
//     gulp.task("scripts:examples", function () {
//         return gulp
//             .src(options.examplesDir + "/js/*.js")
//             .pipe(browserSync.stream());
//     });
// };
