const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

module.exports = new KnexSessionStore({
  knex: require("../../../data/dbConfig"),
  tablename: "sessions",
  sidfieldname: "sid",
  createtable: true,
  clearInterval: 1000 * 60 * 1
});
