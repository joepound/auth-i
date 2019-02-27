exports.up = (knex, Promise) =>
  knex.schema.createTable("Users", tbl => {
    tbl.increments("UserID");
    tbl
      .string("UserName")
      .unique()
      .notNullable();
    tbl.string("UserPassword").notNullable();
    tbl.timestamps(true, true);
  });

exports.down = (knex, Promise) => knex.schema.dropTableIfExists("Users");
