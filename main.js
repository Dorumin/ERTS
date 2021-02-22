const { app, BrowserWindow } = require('electron');
const { client } = require('electron-connect');

const url = require('url');
const path = require('path');
const index = path.join(__dirname, 'output', 'index.html');

const DEV = process.env.NODE_ENV === 'development';

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1200,
        // Whether to have the default UI wrapping windows
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    mainWindow.maximize();

    let rootPath;
    if (DEV) {
        rootPath = `http://localhost:${process.env.PORT || 3000}`;
    } else {
        rootPath = url.format({
            pathname: index,
            protocol: 'file:',
            slashes: true
        });
    }

    mainWindow.loadURL(rootPath);

    if (DEV) {
        mainWindow.webContents.openDevTools();
    }

    if (DEV) {
        client.create(mainWindow);
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

/**
 * Electron has finished initialization and is ready to create
 * browser windows. Some APIs can only be used after this event occurs.
 */
app.on('ready', createWindow);

/**
 * Quit when all windows are closed.
 */
app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    /**
     * On OS X it's common to re-create a window in the app when the
     * dock icon is clicked and there are no other windows open.
     */
    if (mainWindow === null) {
        createWindow();
    }
});
