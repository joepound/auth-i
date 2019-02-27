module.exports = {
  name: "Hello World",
  secret: (process.env.SECRET_KEY = `${Date.now()}${Math.floor(
    Math.random() * 100000000
  )}`),
  cookie: {
    maxAge: 1000 * 60 * 1,
    secure: false
  },
  httpOnly: true,
  resave: false,
  saveUninitialized: false,
  store: require("./sessionStore")
};
