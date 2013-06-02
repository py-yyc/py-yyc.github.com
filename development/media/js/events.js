define(['jquery', 'module'], function($, module){
	var sig_id = module.config().sig_id;
	var sig = module.config().sig;
	var eventsUrl = 'http://api.meetup.com/2/events?status=upcoming%2Cpast' +
	'&order=time&limited_events=False&group_urlname=py-yyc&desc=true&offset=0' + 
	'&format=json&page=20&fields=&sig_id=' + sig_id + '&sig=' + sig + '&callback=?';

	$.getJSON(eventsUrl, {}, function(data, textStatus, jqXHR) {
		console.log(data);
	});
});