'use strict';

const express = require('express');
const { User } = require('../models');
const router = express.Router();


router.post('/signup', async (req, res) => {

  try {
    // req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await User.create(req.body);
    res.status(200).json(record);
    console.log(record);
  } catch (e) { 
    res.status(403).send("Error Creating User"); 
  }
});


module.exports = router;
