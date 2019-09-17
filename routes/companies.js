const express = require('express');

const router = express.Router();
const path = process.cwd();

const {
  createCompany
} = require(`${path}/models/companies.js`);



router.post('/', async function(req, res, next) {
  try {
    await createCompany(req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
})


  module.exports = router;

// router.get('/UserByUsername', async function(req, res, next) {
//     try {
//       console.log(req.query.username);
//       const user = await getUser(req.query.username);
//       res.json(user);
//       res.status(200).end();
//     } catch (err) {
//       next(err);
//     }
//   })





