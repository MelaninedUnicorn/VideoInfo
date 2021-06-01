const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on("ready", () => {
	console.log("Hello Mugisha <3");
	mainWindow = new BrowserWindow({
		webPreferences: { nodeIntegration: true, contextIsolation: false },
	});

	mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("video:submit", (event, path) => {
	ffmpeg.ffprobe(path, (err, metadata) => {
		mainWindow.webContents.send("video:metadata", metadata.format.duration);
	});
});
