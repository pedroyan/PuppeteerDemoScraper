const puppeteer = require('puppeteer');

//Puppeteer API docs: https://github.com/puppeteer/puppeteer/blob/master/docs/api.md

module.exports = async function(githubName) {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();

	await page.setViewport({ width: 1280, height: 800 });

	await page.goto(`https://github.com/${githubName}?tab=repositories`, {
		waitUntil: 'networkidle2'
	});

	const liSelector = '#user-repositories-list li';
	const linksSelector = `${liSelector} h3 a`;
	await page.waitForSelector(liSelector);

	const links = await page.evaluate(linksSelector => {
		var aElements = document.querySelectorAll(linksSelector);
		return Array.from(aElements).map(elem => {
			return elem.href;
		});
	}, linksSelector);

	//console.log('The following links were found:', links);
	await browser.close();

	return links;
};
