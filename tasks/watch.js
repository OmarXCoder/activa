const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const { sass } = require("./styles");
const { html } = require("./html");
// const { scripts } = require("./scripts");

// gulp.task("watch:sass", function () {
//     gulp.watch("src/assets/**/*.scss", ["sass"]);
// });

// gulp.task("watch:html", function () {
//     gulp.watch(["src/templates/**/*.hbs", "src/views/**/*.hbs"], ["html"]);
//     gulp.watch("src/*.html").on("change", browserSync.reload);
// });

function watch(callback) {
    gulp.watch("src/assets/**/*.scss", sass);

    // gulp.watch(["src/templates/**/*.hbs", "src/views/**/*.hbs"], html);

    // gulp.watch("src/assets/**/*.js", scripts);

    // gulp.watch("src/*.html").on("change", browserSync.reload);

    callback();
}

exports.watch = watch;

// gulp.watch(gulp.parallel(["watch:html", "watch:sass"]));

// gulp.task(
//     "watch:scripts",
//     ["scripts", "scripts:global", "scripts:examples"],
//     function () {
//         gulp.watch(options.layoutDir + "/js/**/*.js", ["scripts"]);
//         gulp.watch(options.globalDir + "/js/**/*.js", ["scripts:global"]);
//         gulp.watch(options.examplesDir + "/js/**/*.js", [
//             "scripts:examples",
//         ]);
//     }
// );
// };
