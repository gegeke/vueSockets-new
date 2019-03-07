const express = require('express');
const app = express();

// source: https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

const server = app.listen(3001, function() { console.log('server running on port 3001'); });
const io = require('socket.io')(server);

io.on('connection', function(socket) {

	console.log('connected with id: ' + socket.id)

	socket.on('SEND_MESSAGE', function(data) {
		io.emit('hello_vue', 'Get you right back...');
		console.log(data);
	});

	io.emit('hello_vue', 'You are connected');

});
