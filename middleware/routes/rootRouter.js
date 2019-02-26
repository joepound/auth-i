// Create express router
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send(`
    <h1>Test authentication API</h1>
    <p>Welcome to the Test authentication API!</p>
  `);
});

module.exports = router;
