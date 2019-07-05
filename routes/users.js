const express = require('express');

const router = express.Router();
const path = process.cwd();

const {
  getUser,
  getAllUsers,
  createUser
} = require(`${path}/models/users.js`);

router.post('/', async function(req, res, next) {
  try {
    await createUser(req.body);
    const socketio = req.app.get('socketio');
    socketio.emit('user-saved', req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
})

router.get('/', async function(req, res, next) {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
})


router.get('/UserByUsername', async function(req, res, next) {
    try {
      console.log(req.query.username);
      const user = await getUser(req.query.username);
      res.json(user);
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  })

  
  
  
  module.exports = router;