var path = require("path");

// Those are the configurable variables
// if you changed the default folder names
// you should change those variables accordingly
var srcDir = "src"; // source files
var distDir = "dist"; // distribution director
var assetsDir = path.join(srcDir, "assets");

// this is the current working layout
// this defines which layout the gulp tasks work on
// so that it must match the layout's folder name
// there is a list of all available layout names below (config.demos)
var workingLayout = "demo1";

var config = {
    srcDir: srcDir,
    distDir: distDir,
    layout: workingLayout,
    layoutDir: path.join(srcDir, workingLayout),
    assetsDir: assetsDir,
    globalDir: path.join(assetsDir, "global"),
    vendorDir: path.join(assetsDir, "vendor"),
    examplesDir: path.join(assetsDir, "custom"),
    viewsDir: path.join(srcDir, "views"),
    templatesDir: path.join(srcDir, "templates"),
    demos: [
        { name: "demo1", path: path.join(srcDir, "demos/demo1") },
        { name: "demo2", path: path.join(srcDir, "demos/demo2") },
    ],
};

module.exports = config;
