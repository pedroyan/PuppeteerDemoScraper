const puppeteer = require('puppeteer');

const keypress = async () => {
	process.stdin.setRawMode(true);
	return new Promise(resolve =>
		process.stdin.once('data', () => {
			process.stdin.setRawMode(false);
			resolve();
		})
	);
};

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.setViewport({ width: 1280, height: 800 });
	await page.goto('https://www.wikipedia.org/');

	await page.screenshot({ path: 'SS.png', fullPage: true });

	await browser.close();
})();
