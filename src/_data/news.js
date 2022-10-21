/* fetches feeds on build */

const Parser = require('rss-parser');
const parser = new Parser();

let medium_feed = 'https://medium.com/feed/@Start9Labs';
let twitter_feed = 'https://nitter.it/start9labs/rss';

module.exports = async function() {

	let md = await parser.parseURL(medium_feed);
	let tw = await parser.parseURL(twitter_feed);

	let data = await Promise.all([md,tw]).then((values)=>{
		let all = [];
		
		values.forEach(item => {
			all = [...all, ...item.items];
		});

		all.sort(function(a,b){
			return new Date(b.pubDate) - new Date(a.pubDate);
		  });

		return all;
	});

	return data;
	
};