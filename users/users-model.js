const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('companyInfo').select('id', 'username', 'password', 'department');
}

function findBy(filter) {
  return db('companyInfo').where(filter);
}

async function add(user) {
  const [id] = await db('companyInfo').insert(user);
  console.log(`added user`, user)
  return findById(id);
}

function findById(id) {
  return db('companyInfo')
    .where({ id })
    .first();
}