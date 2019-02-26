const randomizeSecret = require("../authentication/secretRandomizer");
const sessionRestrict = require("../../middleware/authentication/session/sessionRestrict");
const jwtAuth = require("../authentication/jwtAuth");

const validate = require("../errors/validationHandler"); // For validating data placed in request bodies 
const statusMsgs = require("./logging/mainStatusMsgs"); // Status messages for console logging on this route
const helperFuncs = require("./helpers/mainHelpers"); // Contains the actual work to be done at an endpoint

// Create express router
const router = require("express").Router();

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

router.get(
  "/users",
  sessionRestrict,
  jwtAuth.authenticate,
  helperFuncs.getAllUsers
);

module.exports = router;
