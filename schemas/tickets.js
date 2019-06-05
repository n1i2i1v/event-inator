const mongoose = require('mongoose');
const pbkdf2 = require('pbkdf2');

const TicketSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    trim: true
  },
  time: {
    type: Date,
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
  password: {
    type: String,
    required: true
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
  tickets: [{
    type: 'ObjectId',
    ref: Ticket
  }],
  events: [{
    type: 'ObjectId',
    ref: Event
  }]
});

UserSchema.pre('save', function(next) {
  this.password = pbkdf2.pbkdf2Sync(this.password, 'salt', 1, 32, 'sha512').toString('hex');
  next();
});

const User = mongoose.model('User', UserSchema);


module.exports = User;
