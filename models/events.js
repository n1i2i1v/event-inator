const mongoose = require('mongoose');
const path = process.cwd();
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
async function getTicketsOfEvent(eventId){
  const event = Event.findEventByID(eventId);
  if(event === null || event.length === 0)
    throw new EventNotFound();
  return event.getAllTicketsOfTheEvent();
}
