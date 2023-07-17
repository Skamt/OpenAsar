const { join } = require('path');
module.exports = (o, n) => {
  const w = new (require('electron').BrowserWindow)({
    frame: false,
    resizable: false,
    center: true,
    backgroundColor: '#2f3136',
    webPreferences: {
      preload: join(__dirname, '..', n, 'preload.js')
    },
    ...o
  });

  const c = w.webContents;
  c.once('dom-ready', () => {
    if (oaConfig.themeSync !== false) try {
      c.insertCSS(JSON.parse(require('fs').readFileSync(require('path').join(require('../paths').getUserData(), 'userDataCache.json'), 'utf8')).openasarSplashCSS);
    } catch { }
  });
	const url = join(__dirname, '..', n, 'index.html');
	console.log(url);
	w.loadFile(url);

  return w;
};