const mongoose = require('mongoose');
const pbkdf2 = require('pbkdf2');
const Event = require('./events.js');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
      }
  }],
  failedLoginCount: Number,
  locked: Number,
  varify: Number,
  events: [{
    type: 'ObjectId',
    ref: Event
  }]
});

CompanySchema.pre('save', function(next) {
  this.password = pbkdf2.pbkdf2Sync(this.password, 'salt', 1, 32, 'sha512').toString('hex');
  next();
});

CompanySchema.statics.findCompanyByID = function(id) {
 return Company.findOne({
    id
  }, {
    password: false
  });
}

CompanySchema.methods.comparePassword = function(password) {
  return this.password === pbkdf2.pbkdf2Sync(password, 'salt', 1, 32, 'sha512').toString('hex');
}

CompanySchema.statics.ﬁndCompanyForLogin = function(filter, value) {
  return Company.findOne({filter: value});
}

CompanySchema.methods.lockCompany = function() {
  Company.update({
    _id: this._id
  }, {
    locked: 1
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

CompanySchema.methods.unLockCompany = function() {
  Company.update({
    _id: this._id
  }, {
    locked: 0
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

CompanySchema.methods.failed = function() {
  Company.update({
    _id: this._id
  }, {
    failedLoginCount: this.failedLoginCount + 1
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

CompanySchema.methods.deleteLoginCount = function() {
  Company.update({
    _id: this._id
  }, {
    failedLoginCount: 0
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

CompanySchema.methods.varified = function() {
  Company.update({
    _id: this._id
  }, {
    varify: 1
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

CompanySchema.methods.unVarified = function() {
  Company.update({
    _id: this._id
  }, {
    varify: 0
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

CompanySchema.methods.updateInfo = function(filter, value) {
  Company.update({
    _id: this._id
  }, {
    filter: value
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

CompanySchema.methods.updatePassword = function(password) {
  Company.update({
    _id: this._id
  }, {
    password: pbkdf2.pbkdf2Sync(password, 'salt', 1, 32, 'sha512').toString('hex')
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

const Company = mongoose.model('Company', CompanySchema);


module.exports = Company;
