const electron = require("electron");

const { app, BrowserWindow } = electron;

app.on("ready", () => {
    console.log("Hello Mugisha <3")
	const mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});
