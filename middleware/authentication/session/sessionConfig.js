module.exports = {
  name: "monkey",
  secret: "keep it secret, keep it safe!",
  cookie: {
    maxAge: 1000 * 60,
    secure: false
  },
  httpOnly: true,
  resave: false,
  saveUninitialized: false,
  store: require("./sessionStore")
};
