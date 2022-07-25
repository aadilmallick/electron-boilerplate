const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  return new BrowserWindow({
    title: "my first app",
    height: 800,
    width: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
}

module.exports = {
  createWindow,
};
