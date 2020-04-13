var gulp = require("gulp");
const copy = require("gulp-copy");
const site = require("../config/site.json");

function copyVenodr(callback) {
    let src = [];

    for (let key in site.packages) {
        src.push(...site.packages[key]);
    }

    gulp.src(src).pipe(copy("src/assets/vendor", { prefix: 1 }));

    callback();
}

exports.copy = gulp.series(copyVenodr);
