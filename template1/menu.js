const { app, BrowserWindow, Menu } = require("electron");

const isDev = process.env.NODE_ENV !== "production";
const isMac = process.platform === "darwin";

function createMenu() {
  const menu = [
    {
      role: "fileMenu",
    },
    {
      label: "Developer",
      submenu: [
        { role: "reload" },
        { type: "separator" },
        { role: "toggledevtools" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { role: "resetZoom" },
      ],
    },
  ];

  isMac && menu.unshift({ role: "appMenu" });
  const mainMenu = Menu.buildFromTemplate(menu);
  return mainMenu;
}

module.exports = {
  createMenu,
};
