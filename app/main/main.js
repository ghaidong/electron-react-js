const path = require('path')
const { app, BrowserWindow } = require('electron')
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },//这个是为了能在主进程中引入node模块,必须项
  })//这个是创建了新窗口
  mainWindow.loadFile('./index.html')
  //选择加载html文件
}
app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})