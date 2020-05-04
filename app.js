const { app, BrowserWindow, globalShortcut } = require('electron')
const path = require('path')
const url = require('url')

let window = null

// Wait until the app is ready
app.once('ready', () => {

/*   // register shortcut
  const key = "Esc"
  const ret = globalShortcut.register(key, () => {
    console.log(`global shortcut: ${key} pressed`)
  })

  if (!ret) {
    console.log("registration failed")
  } */

  window = new BrowserWindow({
    // Set the initial width to 500px
    width: 500,
    // Set the initial height to 400px
    height: 400,
    // set the title bar style
    titleBarStyle: 'hiddenInset',
    // set the background color to black
    backgroundColor: "#111",
    // Don't show the window until it's ready, this prevents any white flickering
    show: false
  })

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.once('ready-to-show', () => {
    window.show()
  })
})

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
})