const mongoose = require('mongoose');
const Ticket = require('./tickets.js');

const EventSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
    trim: true
  },
  description: {
      type: String,
      required: true
  },
  title: {
      type: String,
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
  tickets: [{
    type: 'ObjectId',
    ref: Ticket
  }]
});

EventSchema.statics.findEventByID = function(eventId) {
  return Event.findOne({
     eventId
   }, {});
}

EventSchema.methods.getAllTicketsOfTheEvent = function() {
  return Event.findOne({
      _id: this._id
    }).populate('tickets');
}

EventSchema.methods.addTicket = function(ticket) {
  let ticketsOfTheEvent = this.tickets.push(ticket);
  Event.update({
    _id: this._id
  }, {
    tickets: ticketsOfTheEvent
  }, function(err, affected, resp) {
    console.log(affected);
  });
}


const Event = mongoose.model('Event', EventSchema);


module.exports = Event;
