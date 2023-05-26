const { app, BrowserWindow, screen, ipcMain, nativeTheme } = require('electron')
const path = require('path')

// 热加载
try {
  require('electron-reloader')(module,{});
} catch (_) {}

const createWindow = () => {
  const win = new BrowserWindow({
    width: screen.getPrimaryDisplay().workAreaSize.width, 
    height: screen.getPrimaryDisplay().workAreaSize.height, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })
  // console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools()
    win.loadURL('http://localhost:8090')
  } else {
    win.loadFile('./index.html')
  }
}

ipcMain.handle('dark-mode:toggle', () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light'
  } else {
    nativeTheme.themeSource = 'dark'
  }
  return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
})

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})