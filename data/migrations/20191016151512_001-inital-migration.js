exports.up = function(knex) {
    return knex.schema.createTable('companyInfo', companyInfo => {
      companyInfo.increments();
  
      companyInfo
        .string('username', 128)
        .notNullable()
        .unique();
      companyInfo.string('password', 128).notNullable();
      companyInfo.string('department', 128);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('companyInfo');
  };
