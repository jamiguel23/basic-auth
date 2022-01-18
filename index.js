'use strict';

require('dotenv').config;

// importing server and db for use
const server = require('./lib/server.js');
const { db } = require('./lib/models/index.js');

db.sync()
  .then(() => {
    server.start(process.env.PORT || 3000);
  })
  .catch(console.error);
