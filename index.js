const electron = require('electron');

const {
	app,
	BrowserWindow,
	Menu,
	ipcMain
} = electron;

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true
		},
		title: 'Temperature Converter',
	});

	mainWindow.loadURL(`file://${__dirname}/main.html`);
	mainWindow.on('closed', () => {
		app.quit();
		mainWindow = null;
	});

	const mainMenu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(mainMenu);
});

const menuTemplate = [
{
	label: 'File',
	submenu: [
		{
			label: 'Quit',
			accelerator: process.platform === 'darwin' ? 'Command+Q' : 'CTRL + Q',
			click() {
				app.quit();
			}
		}
	]
},
{
	label: 'View',
	submenu: [
		{
			role: 'reload'
		},
		{
			role: 'toggledevtools'
		}
	]
}
];