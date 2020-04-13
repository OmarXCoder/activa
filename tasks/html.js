const fs = require("fs");
const glob = require("glob");
const pretty = require("pretty");
const extname = require("gulp-extname");
const flatten = require("gulp-flatten");
const data = require("../config/site.json");
// const baseWatch = require("base-watch");

let assemble = null;

function start() {
    assemble = require("assemble")();
    // assemble.use(baseWatch());
    assemble.data(data);
    assemble.engine("*", require("engine-handlebars"));
    assemble.on("postRender", function (view) {
        console.log(" assembled >", view.relative);
    });
}

function html(callback) {
    start();

    assemble.layouts([
        "src/templates/layouts/*.hbs",
        // config.layoutDir + "/templates/layout/*.hbs",
    ]);

    assemble.partials([
        "src/templates/partials/*.hbs",
        // config.layoutDir + "/templates/partials/*.hbs",
    ]);

    assemble
        .src(["src/views/**/*.hbs"], { layout: "base.hbs" })
        .pipe(assemble.renderFile("*"))
        .pipe(extname())
        .pipe(flatten())
        .pipe(assemble.dest("src"));
    callback();
}

// html formatter
function htmlFormatter(callback) {
    var dir = "src";
    if (dir === "") {
        console.log("The option --path is required");
        callback();
        return;
    }
    glob(
        process.cwd() + "/" + dir + "/**/*.html",
        // ignore assets folder
        { ignore: [process.cwd() + "/" + dir + "/assets/**"] },
        function (er, files) {
            files.forEach(function (path) {
                fs.readFile(path, { encoding: "UTF-8" }, function (err, data) {
                    if (err) {
                        throw err;
                    }
                    var formatted = pretty(data, {
                        ocd: true,
                        indent_size: 1,
                        indent_char: "\t",
                        unformatted: ["code", "pre", "em", "strong"],
                    });
                    fs.writeFile(path, formatted, function (err) {
                        if (err) {
                            throw err;
                        }
                        console.log(path + " formatted!");
                    });
                });
            });
        }
    );
    callback();
}

exports.html = html; // gulp.series(start, html);
exports.htmlFormatter = htmlFormatter;
