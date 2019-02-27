// Create express router
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(`
    <h1>Userlist authentication API</h1>
    <p>Welcome to the Userlist authentication API!</p>
  `);
});

module.exports = router;
