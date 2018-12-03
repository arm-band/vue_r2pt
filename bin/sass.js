const sass = require("node-sass");
const fs = require("fs");

sass.render({
    file: "./src/scss/index.scss",
    outputStyle: "compressed"
}, (err, result) => {
    if(err) {
        console.log("file reading error: " + err);
    }
    else {
        fs.writeFile("./dist/css/index.css", result.css, (err) => {
            if(err) {
                console.log("file writing error:" + err);
            }
        });
    }
});