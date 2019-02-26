const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const randomizeSecret = require("../authentication/secretRandomizer");
const jwt = require("../authentication/jwt");

const db = require("../../data/dbConfig");
const sendError = require("../errors/errorHandler");

router.post("/register", (req, res) => {
  console.log("\nAttempting to register new user...");

  const userData = req.body;

  console.log("Checking if all required fields were supplied...");
  if (!userData.UserName) {
    sendError(res, 400, "Username not supplied.");
    console.log("User registration attempt finished.");
  } else if (!userData.UserPassword) {
    sendError(res, 400, "Password not supplied.");
    console.log("User registration attempt finished.");
  } else {
    const hash = bcrypt.hashSync(userData.UserPassword, 12);

    console.log("Proceeding to register the new user...");
    db("Users")
      .insert(userData)
      .then(() => {
        res
          .status(201)
          .json({ UserName: userData.UserName, UserPassword: hash });
        console.log("User registration attempt finished.");
      })
      .catch(err => {
        sendError(res, 500, err.errno || err.toString());
        console.log("User registration attempt finished.");
      });
  }
});

// Randomize  the secret keys in the environment variables on every login - disallows reuse of secret keys
router.post("/login", randomizeSecret, (req, res) => {
  console.log("\nAttempting login...");

  const userData = req.body;

  console.log("Checking if all required fields were supplied...");
  if (!userData.UserName) {
    sendError(res, 400, "Username not supplied.");
    console.log("User login attempt finished.");
  } else if (!userData.UserPassword) {
    sendError(res, 400, "Password not supplied.");
    console.log("User login attempt finished.");
  } else {
    console.log("Retrieving user information records...");
    db("Users")
      .where({ UserName: userData.UserName })
      .first()
      .then(userMatch => {
        console.log("Checking if user exists...");
        if (userMatch) {
          console.log("Checking if correct password was supplied...");
          if (
            bcrypt.compareSync(userData.UserPassword, userMatch.UserPassword)
          ) {
            jwt
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
  }
});

router.get("/users", jwt.authenticate, (req, res) => {
  console.log("Attempting to GET all users...");
  db("Users")
    .then(users => {
      res.status(200).json({ success: true, users });
      console.log("GET attempt for all users finished.");
    })
    .catch(err => {
      sendError(res, 500, err.errno || err.toString());
      console.log("GET attempt for all users finished.");
    });
});

module.exports = router;