const db = require("../../../data/dbConfig");

module.exports = {
  registerUser: userData => db("Users").insert(userData),
  getUserInfo: UserName =>
    UserName
      ? db("Users")
          .where({ UserName })
          .first()
      : db("Users")
};
