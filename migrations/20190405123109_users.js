
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
      tbl.increments('user_id').unique();
      tbl.string('uid', 250).unique();
      tbl.string('display_name');
      tbl.string('first_name', 64);
      tbl.string('last_name', 64);
      tbl.string('email', 64).unique('email');
      tbl.string('password', 250);
      tbl.string('recovery_token', 250);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  };
