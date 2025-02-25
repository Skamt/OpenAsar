const { app, dialog } = require("electron");

app.whenReady().then(() => {
	try {
		require("G:\\Documents\\Repos\\BetterDiscord\\dist");
		// require("G:\\Documents\\Repos\\BetterDiscord\\dist\\betterdiscord.asar");
		// require("G:\\Documents\\Repos\\BetterDiscord\\dist\\betterdiscord-canary.asar");
	} catch (e) {
		dialog.showMessageBox({
			title: "Could not load BetterDiscord",
			type: "error",
			message: e.code ? e.code : "Could not load BetterDiscord",
			detail: e && e.stack ? e.stack : String(e)
		});
	}
});
