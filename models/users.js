const path = process.cwd();
const User = require(`${path}/schemas/users.js`);

const {
  UserNotFound,
  UserAlreadyExists,
  PasswordIncorrect,
  ValidationError,
  UserIsLocked,
  FieldIsRequired
} = require(`${path}/errors/errors.js`);

const maximum_allowed_wrong_passwords = process.env.maximum_allowed_wrong_passwords || 3;


async function login(filter, value, password) {

  const user = await User.ﬁndUserForLogin(filter, value);

  if (user === null || user.length === 0) {
    throw new UserNotFound();
  }
  const result = await user.comparePassword(password);

  if (user.locked) {
    if(!user.varify)
      throw new UserIsLocked();
    if(user.varify)
       user.unLockUser();
  }

  if (!result) {
    user.failedLoginCount = user.failedLoginCount || 0;
    await user.failed();
    if (user.failedLoginCount >= maximum_allowed_wrong_passwords) {
      await user.lockUser();
      await user.deleteLoginCount();
      await user.unVarified();
      throw new UserIsLocked();
    }
    throw new PasswordIncorrect();
  }
    await user.deleteLoginCount();
    return user;

}


async function getUser(filter, value) {
  const user = await User.ﬁndUserForLogin(filter, value);
  if (!user) {
    throw new UserNotFound();
  }
  return user;
}

async function createUser(body) {
  try {
      const user = await new User({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        country: body.country,
        city: body.city,
        zip_code: body.zip_code,
        street: body.street,
        apt_building: body.apt_building,
        region: body.region,
        password: body.password,
        username: body.username,
        phone: [],
        failedLoginCount: 0,
        locked: 0,
        varify: 1,
        tickets: []
    });
    if(body.phone1)
      user.phone.push(body.phone1);
    if(body.phone2)
      user.phone.push(body.phone2);
    await user.save();
  } catch (err) {
    if (err.message.includes('validation')) {
      throw new ValidationError();
    } else if (err.message.includes('duplicate key')) {
      throw new UserAlreadyExists();
    }
    if (err.message.includes('is required.'))
      throw new FieldIsRequired();
  }
}

async function changeInfo(user, filter, value){
  let user = await User.findUserByID();
  if (user === null || user.length === 0) {
    throw new UserNotFound();
  }
  user.updateInfo(filter, value);
}

async function changePassword(filter, user, password){
  let user = await User.findUserForLogin(filter, user);
  if (user === null || user.length === 0) {
    throw new UserNotFound();
  }
  user.updatePassword(password);
}

async function changePhone(UserId, phoneIndex, phoneNumber){
try{
  let user = await User.findUserByID(UserId);
  if (user === null || user.length === 0) {
    throw new UserNotFound();
  }
  user.updatePhone(phoneIndex, phoneNumber);
  }
  catch(err){
    throw new ValidationError();
  }
}
module.exports = {
  login,
  getUser,
  createUser,
  changeInfo,
  changePassword,
  changePhone
}
