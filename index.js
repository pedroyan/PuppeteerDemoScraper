const puppeteer = require('puppeteer');
const githubQuery = require('./modules/githubQuery');
const sunoLogin = require('./modules/sunoLogin');
const secrets = require('./secrets.json');

//Puppeteer API docs: https://github.com/puppeteer/puppeteer/blob/master/docs/api.md
console.log(secrets);

(async () => {
	await sunoLogin(secrets.login, secrets.password);
})().catch(err => {
	console.log(err);
});
