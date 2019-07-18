const mongoose = require('mongoose');
const path = process.cwd();
const Event = require(`${path}/schemas/events.js`);
const User = require(`${path}/schemas/users.js`);

const EventUserSchema = new mongoose.Schema({
  events: {
    type: 'ObjectId',
    ref: Ticket
  },
  users: {
    type: 'ObjectId',
    ref: User
  }
});

const EventUser = mongoose.model('EventUser', EventUserSchema);

module.exports = EventUserSchema;
