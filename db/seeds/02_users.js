const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          first_name: 'Vikanda',
          last_name: 'Gonzales',
          email: 'vika@vikstin.com',
          hashed_password: '$2a$10$ocBq0e5Px1SD47n3KThSd.HdVigMBykgD0iwVst7L7i2n8PIi5Z7W'
        },
        {
          id: 2,
          first_name: 'Dustin',
          last_name: 'Ruskell',
          email: 'dustin@vikstin.com',
          hashed_password: '$2a$10$xk7h/Pe9ajQ76NaA.iaIku4Zl8NsdX7XgnjkUu50XyaYpFGIPh.G.'
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    });
};
