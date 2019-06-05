const mongoose = require('mongoose');
const pbkdf2 = require('pbkdf2');
const Event = require('./events.js');

const CompanySchema = new mongoose.Schema({
  Name: {
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
  events: [{
    type: 'ObjectId',
    ref: Event
  }]
});

CompanySchema.pre('save', function(next) {
  this.password = pbkdf2.pbkdf2Sync(this.password, 'salt', 1, 32, 'sha512').toString('hex');
  next();
});

const Company = mongoose.model('Company', CompanySchema);


module.exports = Company;
