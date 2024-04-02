const { Client } = require('pg');
require('dotenv').config();

const database = new Client({
  user: 'root',
  database: 'mvp',
  host: 'localhost',
  port: 5432,
  password: 'root'
});

database.connect()
  .then(() => {
    console.log(`Connected to MVP database`);
  })
  .catch((err) => {
    console.error('Error connect to Postgresql database', err);
  });

module.exports = database;