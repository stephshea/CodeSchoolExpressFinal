console.log("connected");

var express = require('express');
var app = express();
app.use(express.static('public'));
var cities = require('./routes/cities');
app.use('/cities', cities);

app.listen(process.env.PORT, function() {
	console.log('Listening on port ' + process.env.PORT);
	console.log('Local IP address is ' + process.env.IP);
});

