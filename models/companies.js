const path = process.cwd();
const User = require(`${path}/schemas/companies.js`);

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

  const company = await Comapany.ﬁndCompanyForLogin(filter, value);

  if (company === null || company.length === 0) {
    throw new UserNotFound();
  }
  const result = await company.comparePassword(password);

  if (company.locked) {
    if(!company.varify)
      throw new UserIsLocked();
    if(company.varify)
       company.unLockUser();
  }

  if (!result) {
    company.failedLoginCount = company.failedLoginCount || 0;
    await company.failed();
    if (company.failedLoginCount >= maximum_allowed_wrong_passwords) {
      await company.lockComapany();
      await company.deleteLoginCount();
      await company.unVarified();
      throw new UserIsLocked();
    }
    throw new PasswordIncorrect();
  }
    await company.deleteLoginCount();
    return company;

}


async function getCompany(filter, value) {
  const company = await Company.ﬁndCompanyForLogin(filter, value);
  if (!company) {
    throw new UserNotFound();
  }
  return company;
}

async function createCompany(body) {
  try {
      const company = await new Comapany({
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
    await company.save();
  } catch (err) {
    if (err.message.includes('invalid')) {
      throw new ValidationError();
    } else if (err.message.includes('duplicate key')) {
      throw new UserAlreadyExists();
    }
    if (err.message.includes('is required.'))
      throw new FieldIsRequired();
  }
}

async function changeInfo(company, filter, value){
  let company = await Company.findComapanyByID();
  if (company === null || company.length === 0) {
    throw new UserNotFound();
  }
  comapany.updateInfo(filter, value);
}


async function changePassword(filter, company, password){
  let company = await Company.findCompanyForLogin(filter, company);
  if (company === null || company.length === 0) {
    throw new UserNotFound();
  }
  company.updatePassword(password);
}

module.exports = {
  login,
  getcompany,
  createcompany,
  changeInfo,
  changePassword
}
