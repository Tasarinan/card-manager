const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

const store = require('../redux/store-main.js');
const { readSettings } = require('../redux/actions.js');
const config = require('./utils/config.js');

const APP_DIR = path.resolve(process.cwd());

let win;

/** */
function createWindow() {
  // This makes work React Dev Tools in the electron inspector
  // TODO: move this from here
  // BrowserWindow.addDevToolsExtension('/home/dima/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0/');

  win = new BrowserWindow({
    width: 1100,
    height: 750,
    icon: `${APP_DIR}/assets/icons/icon.png`
  });

  win.loadURL(url.format({
    pathname: `${APP_DIR}/index.html`,
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

function displayError(message) {
  const contents = win.webContents;
  contents.send('error', message);
}

app.on('ready', async () => {
  createWindow();

  setTimeout(async () => {
    try {
      await config.load();
    } catch (error) {
      displayError(error.message);
    }
  }, 3000);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
