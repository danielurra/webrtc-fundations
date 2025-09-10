var socket = io.connect('http://localhost:4000');

var message = document.getElementById('message');
var button = document.getElementById('send');
var username = document.getElementById('username');
var output = document.getElementById('output');

function sendMessage() {
  socket.emit('sendingmessage', {
    message: message.value,
    username: username.value,
  });
  message.value = '';
}

button.addEventListener('click', sendMessage);

message.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

socket.on('broadcastmessage', (data) => {
  output.innerHTML += '<p><strong>' + data.username + ': </strong>' + data.message + '</p>';
});