exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('email').notNullable().defaultsTo('');
    table.string('hashed_password').notNullable().defaultsTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
