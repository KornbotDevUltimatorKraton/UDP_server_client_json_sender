var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('message',function(msg, rinfo){
	console.log(JSON.parse(msg));
});

server.bind(8080);
