module.exports = {
  userCredentials: (req, res, next) => {
    const userData = req.body;

    console.log(
      "Checking if all required fields were supplied for adding new user..."
    );
    if (!userData.UserName) {
      sendError(res, 400, "Username not supplied.");
      console.log("User registration attempt finished.");
    } else if (!userData.UserPassword) {
      sendError(res, 400, "Password not supplied.");
      console.log("User registration attempt finished.");
    } else {
      next();
    }
  }
};
