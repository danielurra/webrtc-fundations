const express = require('express');
const socket = require('socket.io');

var app = express();

var server = app.listen(4000, () => {
  console.log('Server is running on localhost:4000');
});

app.use(express.static('public'));

var upgradedServer = socket(server);

upgradedServer.on('connection', (socket) => {
  socket.on('sendingmessage', (data) => {
    upgradedServer.emit('broadcastmessage', data);
  });
  console.log('Websocket connected: ' + socket.id);
});