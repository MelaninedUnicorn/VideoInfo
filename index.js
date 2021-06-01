const electron = require("electron");
const ffmpeg = require("fluent-ffmpeg");
const { app, BrowserWindow, ipcMain } = electron;

app.on("ready", () => {
	console.log("Hello Mugisha <3");
	const mainWindow = new BrowserWindow({
		webPreferences: { nodeIntegration: true },
	});
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("video:submit", (event, path) => {
	ffmpeg.ffprobe(path, (err, metadata) => {
		console.log("Video duration is : ", metadata.format.duration);
	});
});
