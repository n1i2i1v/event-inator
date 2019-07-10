const path = process.cwd();
const Event = require(`${path}/schemas/events.js`);

const {
  UserNotFound,
  UserAlreadyExists,
  PasswordIncorrect,
  ValidationError,
  UserIsLocked,
  FieldIsRequired
} = require(`${path}/errors/errors.js`);

async function createEvent(body) {
  try {
      const event = await new Event({
        date: Date.now(),
        description: body.description,
        title: body.title,
        country: body.country,
        city:  body.city,
        zip_code: body.zip_code,
        street: body.street,
        apt_building: body.apt_building,
        region: body.region,
        tickets: []
    });
    await event.save();
  } catch (err) {
    if (err.message.includes('is required.'))
      throw new FieldIsRequired();
  }
}
