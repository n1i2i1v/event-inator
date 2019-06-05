const mongoose = require('mongoose');
const pbkdf2 = require('pbkdf2');
const Event = require('./events.js');
const Ticket = require('./tickets.js');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  LastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true
  },
  country:  {
    type: String,
    trim: true
  },
  city:  {
    type: String,
    trim: true
  },
  zip_code:  {
    type: String,
    trim: true
  },
  street:  {
    type: String,
    trim: true
  },
  apt_building:  {
    type: String,
    trim: true
  },
  region:  {
    type: String,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  phone: [{
    type: String,
    validate: {
        validator: function(v) {
            return v.length >= 9;
        },
  }],
  failedLoginCount: Number,
  locked: Number,
  events: [{
    type: 'ObjectId',
    ref: Event
  }],
  tickets: [{
    type: 'ObjectId',
    ref: Ticket
  }]
});

UserSchema.pre('save', function(next) {
  this.password = pbkdf2.pbkdf2Sync(this.password, 'salt', 1, 32, 'sha512').toString('hex');
  next();
});

const User = mongoose.model('User', UserSchema);


module.exports = User;
