
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pirates', table => {
  	table.increments();
  	table.text('name');
  	table.text('poison');
  	table.text('accessory');
  	table.text('image_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pirates');
};
