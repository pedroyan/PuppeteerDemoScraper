const puppeteer = require('puppeteer');
const githubQuery = require('./modules/githubQuery');

//Puppeteer API docs: https://github.com/puppeteer/puppeteer/blob/master/docs/api.md

(async () => {
	const userName = 'pedroyan';
	const links = await githubQuery(userName);
	console.log(`Repos from ${userName}`, links);
})();
