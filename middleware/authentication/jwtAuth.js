const jwt = require("jsonwebtoken");
const sendError = require("../errors/errorHandler");

module.exports = {
  generateToken: user =>
    new Promise((res, rej) =>
      jwt.sign(
        user,
        process.env.SECRET_KEY,
        {
          expiresIn: 60
        },
        (err, token) => (err ? rej(err) : res(token))
      )
    ),
  authenticate: (req, res, next) => {
    const token = req.get("Authorization");
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          sendError(res, 401, "You shall not pass!");
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      sendError(res, 401, "You shall not pass!");
    }
  }
};
