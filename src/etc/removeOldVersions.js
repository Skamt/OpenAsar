const { version } = require("../utils/buildInfo");
const { join } = require("path");
const { rmSync, readdirSync } = require("fs");

const discordPath = join(process.env.LOCALAPPDATA, "Discord");
readdirSync(discordPath)
	.filter(a => a.startsWith("app-"))
	.filter(a => a !== `app-${version}`)
	.map(a => join(discordPath, a))
	.forEach(a => rmSync(a, { recursive: true, force: true }));
