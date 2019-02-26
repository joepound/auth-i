const router = require("express").Router();

const randomizeSecret = require("../authentication/secretRandomizer");
const jwtAuth = require("../authentication/jwtAuth");

const validate = require("../errors/validationHandler");
const statusMsgs = require("./logging/mainStatusMsgs");
const helperFuncs = require("./helpers/mainHelpers");

router.post(
  "/register",
  validate(...statusMsgs.registerUser).userCredentials,
  helperFuncs.registerUser
);

// Randomize  the secret keys in the environment variables on every login - disallows reuse of secret keys
router.post(
  "/login",
  randomizeSecret,
  validate(...statusMsgs.login).userCredentials,
  helperFuncs.login
);

router.get("/users", jwtAuth.authenticate, helperFuncs.getAllUsers);

module.exports = router;
