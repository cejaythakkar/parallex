var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000;

express.use(express.static('public'));

express.listen(port,function(){
	console.log('server up and running ....!');
});