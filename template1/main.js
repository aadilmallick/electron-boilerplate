const { app, BrowserWindow, Menu } = require("electron");
const { createMenu } = require("./menu.js");
const { createWindow } = require("./windows");

const isDev = process.env.NODE_ENV !== "production";
const isMac = process.platform === "darwin";

let mainWindow;

async function runApp() {
  await app.whenReady();
  mainWindow = createWindow();
  Menu.setApplicationMenu(createMenu());
}

app.on("window-all-closed", () => {
  // if all windows are closed on mac, quit application
  if (isMac) app.quit();
});

app.on("activate", () => {
  // on mac, open up a new app when exited out of all windows and starting new app
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

runApp();
