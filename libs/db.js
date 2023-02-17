const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'yasashi',
    password : 'briliant329020',
    database : 'fullstack'
  }
});

export default knex;