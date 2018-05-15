const TABLE_NAME = 'reviews'

exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(function () {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          title: 'This is delicious',
          text: 'Whoever came up with this was a genius!',
          rating: 5,
          snack_id: 1,
          user_id: 1
        },
        {
          id: 2,
          title: 'Wow why',
          text: 'Why',
          rating: 1,
          snack_id: 2,
          user_id: 2
        },
        {
          id: 3,
          title: '...',
          text: 'Who did this',
          rating: 1,
          snack_id: 2,
          user_id: 1
        },
        {
          id: 4,
          title: 'it\'s ok',
          text: 'meh',
          rating: 3,
          snack_id: 3,
          user_id: 2
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    });
};
