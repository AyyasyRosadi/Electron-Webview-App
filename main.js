import { app, BrowserWindow, screen } from "electron";
import path from "path";

let LOAD_URL = "https://cxds-player.mdevoffice.net?device=electron";

function createWindow() {
  try {
    const displays = screen.getAllDisplays();

    const monitorWidths = [];
    const monitorHeights = [];

    for (let i = 0; i < displays.length; i++) {
      monitorWidths.push(displays[i].bounds.width);
      monitorHeights.push(displays[i].bounds.height);
    }

    const width = monitorWidths.reduce((acc, curr) => acc + curr, 0);
    const height = Math.min(...monitorHeights);

    let win = new BrowserWindow({
      width: width,
      height: height,
      x: 0,
      y: 0,
      frame: false,
      // transparent: true,
    });
    win.loadFile("./splash.html");

    setTimeout(() => {
      win.setBounds({ x: 0, y: 0, width: width, height: height });
      win.loadURL(LOAD_URL);
    }, 5000);
  } catch (err) {
    console.log("ERR#in:createWindow", err);
  }
}

app
  .whenReady()
  .then(createWindow)
  .catch((err) => console.log("ERR#in:whenReady", err));
