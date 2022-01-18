'use strict';

const express = require('express');
const   { UserModel }   = require('../models');
const router = express.Router();
const sequelize = require('sequelize');
// const bcrypt = require('bcrypt');
// console.log(User);

router.post('/signup', createUser)

async function createUser(req, res) {

    console.log(req.body);
    console.log(UserModel.create);
  try {
    // req.body.password = await bcrypt.hash(req.body.password, 10);
    console.log(UserModel);
    const record = await UserModel.create(req.body);
    res.status(200).json(record);
    console.log(record);
  } catch (e) { 
    res.status(403).send("Error Creating User"); 
    console.log(e)
  }
};


module.exports = router;
