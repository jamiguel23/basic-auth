'use strict';

const express = require('express');
const app = express();


// import modules
const notFoundErr = require('./error-handlers/404.js');
const serverErr = require('./error-handlers/500.js')
const mainRoute = require('./routes/main.js');
const logger = require('./middleware/logger.js')
const signUp = require('./routes/signUp.js')

app.use(express.json());
app.use(logger);




// routes
app.use(mainRoute);
app.use(signUp);





//error handlers
app.use(notFoundErr);
app.use(serverErr);

//export to index.js
module.exports = {
  server: app,
  start: port => {
    if (!port) {
      throw new Error('missing port');
    }
    app.listen(port, () => console.log(`Server running on: ${port}`));
  }
}
