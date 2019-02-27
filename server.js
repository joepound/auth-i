/* Server imports */

const express = require("express");

const helmet = require("helmet");
const morgan = require("morgan");
const session = require("express-session");

const sessionConfig = require("./middleware/authentication/session/sessionConfig");

const rootRouter = require("./middleware/routes/rootRouter");
const mainRouter = require("./middleware/routes/mainRouter");
const errorRouter = require("./middleware/routes/errorRouter");

// server setup
const server = express();

// built-in middleware
server.use(express.json());

// third party middleware
server.use(helmet());
server.use(morgan("dev"));
server.use(session(sessionConfig)); // Configured session length is currently at: 1 hour

// custom routing middleware
server.use("/", rootRouter); // routing for root URL
server.use("/api", mainRouter);
server.use(errorRouter); // routing for URL's resolving to bad queries

module.exports = server;
