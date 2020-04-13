const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const { watch } = require("./watch");

function serve(callback) {
    browserSync.init({
        notify: true,
        server: {
            baseDir: ["src"],
            // routes: { "/node_modules": "node_modules" },
        },
    });

    callback();
}
exports.serve = gulp.series(watch, serve);

// module.exports = function (options) {
//     gulp.task("serve", ["watch"], function () {
//         browserSync({
//             notify: false,
//             port: 9000,
//             server: {
//                 baseDir: [options.srcDir],
//                 routes: { "/node_modules": "node_modules" },
//             },
//         });
//     });

//     gulp.task("serve:dist", function () {
//         browserSync({
//             notify: false,
//             port: 9000,
//             server: {
//                 baseDir: [options.distDir],
//             },
//         });
//     });
// };
