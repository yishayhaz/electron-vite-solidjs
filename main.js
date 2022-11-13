const { app, BrowserWindow } = require("electron");
const path = require("path");

app.on("ready", () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile(path.join(__dirname, "src/index.html"));

  win.webContents.openDevTools();
});
