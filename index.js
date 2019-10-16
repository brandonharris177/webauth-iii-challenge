require('dotenv').config()
const server = require('./server.js');
const defaults = require('./config/default')

server.listen(defaults.port, () => {
    console.log(`\n*** Server Running on http://localhost${defaults.port} ***\n`);
  });