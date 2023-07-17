// if ('<notrack>' === 'true') { // Disable sentry
// 	try {
// 		window.__SENTRY__.hub.getClient().getOptions().enabled = false;
	
// 		Object.keys(console).forEach(x => console[x] = console[x].__sentry_original__ ?? console[x]);
// 	} catch { }
// }

// let lastBgPrimary = '';
// const themesync = async () => {
  // const getVar = (name, el = document.body) => el && (getComputedStyle(el).getPropertyValue(name) || getVar(name, el.parentElement))?.trim();

  // const bgPrimary = getVar('--background-primary');
  // if (!bgPrimary || bgPrimary === '#36393f' || bgPrimary === '#fff' || bgPrimary === lastBgPrimary) return; // Default primary bg or same as last
  // lastBgPrimary = bgPrimary;

  // const vars = [ '--background-primary', '--background-secondary', '--brand-experiment', '--header-primary', '--text-muted' ];

  // let cached = await DiscordNative.userDataCache.getCached() || {};

  // const value = `body { ${vars.reduce((acc, x) => acc += `${x}: ${getVar(x)}; `, '')} }`;
  // const pastValue = cached['openasarSplashCSS'];
  // cached['openasarSplashCSS'] = value;

  // if (value !== pastValue) DiscordNative.userDataCache.cacheUserData(JSON.stringify(cached));
// };


// Settings info version injection
// let i = setInterval(() => {
// 	const host = document.querySelector("#app-mount > div > div");
// 	if (!host || document.querySelector('#openasar-ver')) return;
// 	clearInterval(i);
// 	const el = document.createElement('span');
// 	el.id = 'openasar-ver';
	
// 	el.textContent = 'OpenAsar';
// 	el.onclick = () => DiscordNative.ipc.send('DISCORD_UPDATED_QUOTES', 'o');
	
// 	host.append(el);
// }, 2000);

// const injCSS = x => {
//   const el = document.createElement('style');
//   el.appendChild(document.createTextNode(x));
//   document.body.appendChild(el);
// };

// injCSS(`
// #openasar-ver {
//   display:inline-block;
//   text-transform: none;
//   position:relative;
//   font-weight:bold;
//   top:-5px;
//   cursor: pointer;
//   font-size: 14px;
//   font-family: 'Noto Sans';
//   pointer-events: auto;
//   -webkit-app-region: no-drag;
// }


// #openasar-ver:hover {
//   text-decoration: underline;
//   color: var(--text-normal);
// }`);

// injCSS(`<css>`);

// openasar = {}; // Define global for any mods which want to know / etc

// setInterval(() => { // Try init themesync
  // try {
    // themesync();
  // } catch (e) { }
// }, 10000);
// themesync();