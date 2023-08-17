const { app } = require("electron");

function patchAudioVolume() {
	const original = HTMLAudioElement.prototype.play;
	Object.defineProperty(HTMLAudioElement.prototype, "play", {
		configurable: true,
		writable: true,
		value: function() {
			this.volume = 0.2;
			return original.apply(this, arguments);
		}
	});
}

app.on("browser-window-created", (event, win) => {
	win.webContents.on("frame-created", (event, { frame }) => {
		frame.once("dom-ready", () => {
			try {
				const url = new URL(frame.url);
				if (url.host !== "open.spotify.com" || url.pathname.indexOf("/embed/") !== 0) return;
				
				frame.executeJavaScript(`(${patchAudioVolume})();`);
			} catch (error) {
				console.error(error);
			}
		});
	});
});