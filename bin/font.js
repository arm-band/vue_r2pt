const fs = require("fs");

const dir = {
    src: "./node_modules/sass-basis/src/font/",
    dist: "./dist/fonts/"
}

fs.copyFileSync(`${dir.src}basis.eot`, `${dir.dist}basis.eot`);
fs.copyFileSync(`${dir.src}basis.svg`, `${dir.dist}basis.svg`);
fs.copyFileSync(`${dir.src}basis.ttf`, `${dir.dist}basis.ttf`);
fs.copyFileSync(`${dir.src}basis.woff`, `${dir.dist}basis.woff`);