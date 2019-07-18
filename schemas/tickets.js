const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  cost: {
    type: Number,
    required: true
  },
});

const Ticket = mongoose.model('Ticket', TicketSchema);


module.exports = Ticket;
