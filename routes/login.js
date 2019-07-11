const express = require('express');
const router = express.Router();
const path = process.cwd();

const {
  login
} = require(`${path}/models/users.js`);

const {
  companyLogin
} = require(`${path}/models/companies.js`);

router.get('/loginUser', async function(req, res, next) {
    try {
      const user = await login(req.query.username, req.query.password);
      res.json(user);
      res.status(200).end();
    } catch (err) {
      next(err)
    }
  })

  module.exports = router;
