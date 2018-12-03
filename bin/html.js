const fs = require("fs");

const dir = {
    src: "./src/html/",
    dist: "./dist/"
}

fs.copyFileSync(`${dir.src}index.html`, `${dir.dist}index.html`);