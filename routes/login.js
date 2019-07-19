const express = require('express');
const router = express.Router();
const path = process.cwd();

const {
  login
} = require(`${path}/models/users.js`);

const {
  companyLogin
} = require(`${path}/models/companies.js`);


router.get('/loginCompany', async function(req, res, next) {
  try {
    //console.log(req.body);
    const user = await companyLogin(req.body.email, req.body.password);
    res.json(user);
    res.status(200).end();
  } catch (err) {
    next(err)
  }
})

router.get('/loginUser', async function(req, res, next) {

  
    try { 
      const user_with_username = await login(req.body.user_email, req.body.password);
      res.json(user_with_username);
      res.status(200).end();
    } catch (err) {
      next(err)
      
    }
  })

  

  module.exports = router;
