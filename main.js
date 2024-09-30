const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1100,
    height: 900,
    webPreferences: {
      nodeIntegration: true, // Enable nodeIntegration if necessary
      contextIsolation: false, // Use this for older Electron versions
    }
  });

  win.webContents.openDevTools();
  win.loadFile('./index.html')
  // win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

require('electron-reloader')(module, {
  // Custom path to Electron binary
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});