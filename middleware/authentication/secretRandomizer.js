// Randomizes  the secret keys in the environment variables on every login - run before generating a token
module.exports = (req, res, next) => {
  process.env.SECRET_KEY = `${Date.now()}${Math.floor(
    Math.random() * 100000000
  )}`;
  next();
};
