const path = process.cwd();
const Ticket = require(`${path}/schemas/tickets.js`);
const User = require(`${path}/schemas/users.js`);
const Event = require(`${path}/schemas/events.js`);

const {
  UserNotFound,
  UserAlreadyExists,
  PasswordIncorrect,
  ValidationError,
  UserIsLocked,
  FieldIsRequired,
  EventNotFound
} = require(`${path}/errors/errors.js`);

// async function createTicket(body) {
//       const ticket = await new Ticket({
//         body.cost
//       });
//       await ticket.save();
//   }
// }

async function createTicketForEvent(event, ticketCost) {
  const event = Event.findEventByID(userId);
  if(event === null || event.length === 0)
    throw new EventNotFound();
  const ticket = await new Ticket({
    cost: ticketCost
  });

  await ticket.save();
  user.addTicket(ticket._id);
  }


async function createTicketForUserAndEvent(userId) {
      // const user = User.findUserByID(userId);
      // if(company === null || company.length === 0)
      //   throw new UserNotFound();
      const event = Event.findEventByID(userId);
      if(event === null || event.length === 0)
          throw new EventNotFound();
      const ticket = await new Ticket({
        body.cost
      });

      await ticket.save();
      //user.addTicket(ticket._id);
      event.addTicket(ticket._id);
  }
