/* Server imports */

const express = require("express");

const helmet = require("helmet");
const morgan = require("morgan");

const rootRouter = require("./middleware/routes/rootRouter");
const errorRouter = require("./middleware/routes/errorRouter");

// server setup
const server = express();

// built-in middleware
server.use(express.json());

// third party middleware
server.use(helmet());
server.use(morgan("dev"));

// custom routing middleware
server.use("/", rootRouter); // routing for root URL
server.use(errorRouter); // routing for URL's resolving to bad queries

module.exports = server;
