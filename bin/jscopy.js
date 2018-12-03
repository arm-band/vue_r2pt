const fs = require("fs");

const dir = {
    src: {
        path: "./node_modules/",
        vue: "vue/dist/"
    },
    dist: {
        path: "./dist/js/",
    }
}

fs.copyFileSync(`${dir.src.path}${dir.src.vue}vue.js`, `${dir.dist.path}vue.js`);
fs.copyFileSync(`${dir.src.path}${dir.src.vue}vue.min.js`, `${dir.dist.path}vue.min.js`);
fs.copyFileSync(`./src/js/main.js`, `${dir.dist.path}main.js`);