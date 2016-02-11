// Straightforward "chat" application from
// http://socket.io/get-started/chat/
// Daemonized with:
// sudo npm install pm2 -g
// according to: 
// https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04

var io = require('socket.io')(8080);

io.on('connection', function(socket){
  socket.on('sensor_data', function(msg){
    io.emit('measurement', msg);
  });
});

