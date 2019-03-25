const express = require('express')
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 4000

app.use(express.static('public'));

io.on('connection', function(socket){
  	console.log('a user connected');
	socket.on('chat message', function(msg){
		//console.log('message: ' + msg);
	    io.emit('chat message', msg);
	});
	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});
});

http.listen(PORT, function(){
  console.log('listening on *:'+PORT);
});