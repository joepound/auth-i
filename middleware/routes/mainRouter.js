const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
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
      .then(() =>
        res
          .status(201)
          .json({ UserName: userData.UserName, UserPassword: hash })
      )
      .catch(err => sendError(res, 500, err.errno || err.toString()))
      .finally(console.log("User registration attempt finished."));
  }
});

router.post("/login", (req, res) => {
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
            res.status(200).json("One has simply logged in.");
          } else {
            sendError(res, 401, "You shall not pass!");
          }
        } else {
          sendError(res, 404, "You shall not pass!");
        }
        console.log("User login attempt finished.")
      })
      .catch(err => {
        console.log("User login attempt finished.")
        sendError(res, 500, err.errno || err.toString());
      });
  }
});

router.get("/users", (req, res) => {});

module.exports = router;
