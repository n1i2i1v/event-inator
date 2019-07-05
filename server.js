const express = require('express');

const path = require('path');
const PATH = process.cwd();

const app = express();

const http = require('http').Server(app);
const socketio = require('socket.io')(http);
app.set('socketio', socketio);

 app.use(express.json());
 app.use(express.urlencoded({extended: true}));

 const {
//   UserNotFound,
//   UserAlreadyExists,
//   PasswordIncorrect,
//   ValidationError,
  } = require('./errors/errors.js');

app.use('/users', require('./routes/users.js'));
app.use('/login', require('./routes/login.js'));



app.use(express.static('public'));

app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/login.html'))
})


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})


app.use(function(req, res, next) {
  res.status(404).send('page was not found!!');
})

app.use(function(err, req, res, next) {
  
})

socketio.on('connect', function() {
  //console.log('someone is connected');
})

http.listen(3000, function() {
  console.log('server is up and running...');
})

