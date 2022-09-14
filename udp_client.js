var dgram = require('dgram');

var s = dgram.createSocket('udp4');

s.send(Buffer.from(JSON.stringify({'hello':"data_receive"})), 8080,'localhost');
