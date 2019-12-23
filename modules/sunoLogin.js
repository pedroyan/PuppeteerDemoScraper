const puppeteer = require('puppeteer');

module.exports = async function(username, password) {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.setViewport({ width: 1280, height: 800 });

	await page.goto('https://membros.sunoresearch.com.br/', {
		waitUntil: 'networkidle2'
	});

	await page.focus('#user');
	await page.keyboard.type(username);

	await page.focus('#pass');
	await page.keyboard.type(password);

	await page.click('input[type="submit"]');

	setTimeout(() => {
		browser.close();
	}, 10000);
};
