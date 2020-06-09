var twit = require('twit');
var config = require('./config.js');
const randomItem = require('random-item');
var schedule = require('node-schedule');

var Twitter = new twit(config);

var arr = [
	"Hello!!!",
	"How are you?",
	"Today is a great day."
];

var sched = schedule.scheduleJob({hour:13, minute: 5}, function(){
	Twitter.post('statuses/update',
	{
		status: randomItem (arr)
	},
	function(err, data, response) {
		console.log(data)
	});
});
