const browserSync = require("browser-sync");
browserSync({
    files: [
        "./dist/css/**/*.css",
        "./dist/js/**/*.js",
        "./dist/**/*.html",
    ],
    server: {
        baseDir: "./dist/"
    },
    open: "external",
    https: true
});