class UserNotFound extends Error {
    constructor() {
      super('User is not found!');
    }
}
class UserAlreadyExists extends Error {
    constructor() {
      super('User already exists!');
    }
}
class PasswordIncorrect extends Error {
    constructor() {
      super('Invalid password!');
    }
}
class ValidationError extends Error {
    constructor() {
      super('Invalid input!');
    }
}
class UserIsLocked extends Error {
    constructor() {
      super('Failed login!');
    }
}
class FieldIsRequired extends Error {
    constructor() {
      super('All fields are required to input!');
    }
}

  module.exports = {
    UserNotFound,
    UserAlreadyExists,
    PasswordIncorrect,
    ValidationError,
    UserIsLocked,
    FieldIsRequired
  }
