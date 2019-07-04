const mongoose = require('mongoose');
const pbkdf2 = require('pbkdf2');
const Ticket = require('./tickets.js');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
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
    trim: true,
    validate: {
        validator: function(v) {
            return v.length >= 4;
        }
    }
  },
  phone: [{
    type: String,
    enum: {
        values: ['Mobile', 'Home', 'Office']
    },
    validate: {
        validator: function(v) {
            return v.length >= 9;
        }
    }
  }],
  failedLoginCount: Number,
  locked: Number,
  tickets: [{
    type: 'ObjectId',
    ref: Ticket
  }]
});

UserSchema.pre('save', function(next) {
  this.password = pbkdf2.pbkdf2Sync(this.password, 'salt', 1, 32, 'sha512').toString('hex');
  next();
});

UserSchema.statics.getUserByID = function(id) {
 return User.findOne({
    id
  }, {
    password: false
  });
}

UserSchema.methods.comparePassword = function(password) {
  return this.password === pbkdf2.pbkdf2Sync(password, 'salt', 1, 32, 'sha512').toString('hex');
}

UserSchema.statics.ﬁndUserForLogin = function(filter, value) {
  return User.findOne({filter: value});
}

UserSchema.methods.lockUser = function() {
  User.update({
    _id: this._id
  }, {
    locked: 1
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

UserSchema.methods.unlockUser = function() {
  User.update({
    _id: this._id
  }, {
    locked: 0
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

UserSchema.methods.failed = function() {
  User.update({
    _id: this._id
  }, {
    failedLoginCount: user.failedLoginCount + 1
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

UserSchema.methods.deleteLoginCount = function() {
  User.update({
    _id: this._id
  }, {
    failedLoginCount: 0
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

UserSchema.methods.updateEmail = function(email) {
  User.update({
    _id: this._id
  }, {
    email: email
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

UserSchema.methods.updateUsername = function(username) {
  User.update({
    _id: this._id
  }, {
    username: username
  }, function(err, affected, resp) {
    console.log(affected);
  });
}

UserSchema.methods.updatePassword = function(password) {
  User.update({
    _id: this._id
  }, {
    password: pbkdf2.pbkdf2Sync(password, 'salt', 1, 32, 'sha512').toString('hex')
  }, function(err, affected, resp) {
    console.log(affected);
  });
}



// UserSchema.methods.getAllPostsOfTheUser = function(email) {
//   return User.findOne({
//     email: this.email
//   }).populate('posts');
// }




// UserSchema.methods.updateForDeleteCreate = function(posts) {
//   User.update({
//     email: this.email
//   }, {
//     posts: posts
//   }, function(err, affected, resp) {
//     console.log(affected);
//   });
// }

const User = mongoose.model('User', UserSchema);


module.exports = User;
