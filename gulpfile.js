// var klawSync = require("klaw-sync");
// var options = require("./config/gulp");

// klawSync("./tasks").forEach(function (file) {
//     require(file.path)(options);
// });

// const { sass } = require("./tasks/styles");
// const { scripts } = require("./tasks/scripts");
// const { html, htmlFormatter } = require("./tasks/html");
// const { copy } = require("./tasks/copy");
// const { watch } = require("./tasks/watch");
// const { serve } = require("./tasks/serve");

// module.exports = {
//     sass,
//     scripts,
//     html,
//     htmlFormatter,
//     copy,
//     watch,
//     serve,
// };

const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const server = require("browser-sync").create();

function styles() {
    return gulp
        .src("src/assets/custom/scss/**/*.scss", { sourcemaps: true })
        .pipe(sass.sync().on("error", sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest("src/assets/css"));
    // .pipe(browserSync.stream());
}

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        server: {
            baseDir: "./src",
        },
    });
    done();
}

const watch = () =>
    gulp.watch("src/assets/custom/scss/**/*.scss", gulp.series(styles, reload));

const dev = gulp.series(styles, serve, watch);
exports.default = dev;
exports.styles = styles;
