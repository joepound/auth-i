const bcrypt = require("bcryptjs");
const jwtAuth = require("../../authentication/jwtAuth");

const dbHelper = require("../data_access/usersAccess");
const sendError = require("../../errors/errorHandler");

const registerUser = (req, res) => {
  const userData = req.body;
  userData.UserPassword = bcrypt.hashSync(userData.UserPassword, 12);

  console.log("Proceeding to register the new user...");
  dbHelper
    .registerUser(userData)
    .then(() => {
      res.status(201).json(userData);
      console.log("User registration attempt finished.");
    })
    .catch(err => {
      sendError(res, 500, err.errno || err.toString());
      console.log("User registration attempt finished.");
    });
};

const login = (req, res) => {
  const userData = req.body;

  console.log("Retrieving user information records...");
  dbHelper
    .getUserInfo(userData.UserName)
    .then(userMatch => {
      console.log("Checking if user exists...");
      if (userMatch) {
        console.log("Checking if correct password was supplied...");
        if (bcrypt.compareSync(userData.UserPassword, userMatch.UserPassword)) {
          req.session.user = userMatch;
          jwtAuth
            .generateToken(userMatch)
            .then(token => res.status(200).json({ success: true, token }));
        } else {
          sendError(res, 401, "You shall not pass!");
        }
      } else {
        sendError(res, 404, "You shall not pass!");
      }
      console.log("User login attempt finished.");
    })
    .catch(err => {
      sendError(res, 500, err.errno || err.toString());
      console.log("User login attempt finished.");
    });
};

const getAllUsers = (req, res) => {
  console.log("\nAttempting to GET all users...");
  dbHelper
    .getUserInfo()
    .then(users => {
      res.status(200).json({ success: true, users });
      console.log("GET attempt for all users finished.");
    })
    .catch(err => {
      sendError(res, 500, err.errno || err.toString());
      console.log("GET attempt for all users finished.");
    });
};

module.exports = {
  registerUser,
  login,
  getAllUsers
};
