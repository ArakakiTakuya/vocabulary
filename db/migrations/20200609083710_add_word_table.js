exports.up = function (knex) {
  return knex.schema.createTable("words", (t) => {
    t.increments();

    t.string("en_meaning").unique().notNull();

    t.string("ja_meaning").notNull();

    t.string("level").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("words");
};
