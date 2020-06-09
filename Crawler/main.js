// main.js

const axios = require('axios');
const cheerio = require('cheerio');
const url = "website";

fetchData(url).then( (res) => {
	const html = res.data;
	const $ = cheerio.load(html);
        // This is a specific name of class that was used to get an information
        //   for the crawler
	const statsTable = $('.c-news__body');
	statsTable.each(function() {
		let title = $(this).find('p').text();
		console.log(title);
	});
})

async function fetchData(url) {
	console.log("Crawling data...");

	let response = await axios(url).catch((err) => console.log(err));

	if (response.status !== 200) {
		console.log("Error occurred while fetching data");
		return;
	}

	return response;
}
