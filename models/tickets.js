const path = process.cwd();
const Ticket = require(`${path}/schemas/tickets.js`);

const {
  UserNotFound,
  UserAlreadyExists,
  PasswordIncorrect,
  ValidationError,
  UserIsLocked,
  FieldIsRequired
} = require(`${path}/errors/errors.js`);

async function createTicket(body) {
      const ticket = await new Ticket({body.cost
      });
      await ticket.save();
  }
}
