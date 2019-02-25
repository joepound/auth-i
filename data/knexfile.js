module.exports = {
  // For Knex CLI only (use config named "server" for actual dev use) - need to do this for file pathing
  development: {
    client: "sqlite3",
    connection: {
      filename: "./recipe-book.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
    // Will not turn on foreign key constraints to enable deletion (this is needed to allow seeds to run)
  },

  // For actual dev use
  devServer: {
    client: "sqlite3",
    connection: {
      filename: "./data/recipe-book.sqlite3"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // Ensure that foreign key constraints will be enabled
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: "./data/recipe-book.sqlite3"
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // Ensure that foreign key constraints will be enabled
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
