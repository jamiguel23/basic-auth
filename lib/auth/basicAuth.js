'use strict'

//encode
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const {User} = require('../models/index.js')

let username = 'notJacob';
let password = 'thePassword';

let credentials = username + ':' + password;

let encoded = base64.encode(credentials);
// console.log(credentials, encoded);

let decoded = base64.decode(encoded);
let [user, pass] = decoded.split(':');

console.log(user, pass);

//encrypting
async function encrypt(password) {

  let hash = await bcrypt.hash(password, 10);
  console.log(hash);

}

encrypt(pass);

