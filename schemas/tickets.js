const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
});

const Ticket = mongoose.model('Ticket', TicketSchema);


module.exports = Ticket;
