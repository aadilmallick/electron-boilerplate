#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

const dir = process.argv[2];
const colorError = "\x1b[31m";
const printError = (message) => console.error(colorError, message);

if (!dir)
  return printError(
    "please enter project name, run: create-p5-boilerplate [project-name]"
  );

if (fs.existsSync(dir))
  return printError("directory exists, please choose another name");

fs.mkdirSync(dir);

// fs.copyFile(
//   path.join(__dirname, "template/index.html"),
//   `${dir}/index.html`,
//   (error) => {
//     if (error) printError("error copying index.html: " + error);
//   }
// );

fse.copy("./template1", dir, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("success!");
  }
});
