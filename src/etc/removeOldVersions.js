const { version } = require("../utils/buildInfo");
const { resolve,join } = require("path");
const { rmSync, readdirSync } = require("fs");
const { app } = require('electron');

const discordPath = resolve(app.getPath("exe"),"..","..");
readdirSync(discordPath)
	.filter(a => a.startsWith("app-"))
	.filter(a => a !== `app-${version}`)
	.map(a => join(discordPath, a))
	.forEach(a => rmSync(a, { recursive: true, force: true }));
