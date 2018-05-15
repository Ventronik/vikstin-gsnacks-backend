exports.up = function(knex, Promise) {
  return knex.schema.createTable('reviews', (table) => {
    table.increments();
    table.text('title').notNullable().defaultTo('');
    table.text('text').notNullable().defaultTo('');
    table.integer('rating').notNullable().defaultsTo(1);
    table.integer('snack_id').notNullable().references('snacks.id');
    table.integer('user_id').notNullable().references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reviews');
};
