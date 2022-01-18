'use strict';

const express = require('express');
const basicAuth = require('../auth/basicAuth');
const router = express.Router();

router.post('/login', basicAuth, async (req, res) => {
  console.log('BOOOOO')
  let user = req.body.user;
  res.status(200).json(user);
});

module.exports = router;
