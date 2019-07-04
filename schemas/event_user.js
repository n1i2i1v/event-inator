const mongoose = require('mongoose');
const User = require('./users.js');
const Event = require('./events.js');

const UserSchema = new mongoose.Schema({
  events: [{
    type: 'ObjectId',
    ref: Event
  }],
  users: [{
    type: 'ObjectId',
    ref: User
  }]
})
