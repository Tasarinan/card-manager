const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

const store = require('../redux/store-main.js');

const { loadSettings } = require('../redux/actions.js');

const APP_DIR = path.resolve(process.cwd());

// This enables electron hot-reload
// TODO: move this from here to dev webpack config
require('electron-reload')(`${APP_DIR}/dist`, {
  electron: `${APP_DIR}/node_modules/.bin/electron`,
  hardResetMethod: 'exit'
});

let win;

/** */
function createWindow() {
  // This makes work React Dev Tools in the electron inspector
  // TODO: move this from here
  BrowserWindow.addDevToolsExtension('/home/dima/.config/google-chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0/');

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

app.on('ready', () => {
  let time = 0;

  const fn = () => {
    setTimeout(() => {
      time++;
      store.dispatch(loadSettings(`${time}`));

      fn();
    }, 1000);
  };

  fn();

  createWindow();
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
