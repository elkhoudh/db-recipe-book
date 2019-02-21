require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Routes
const dishesRoute = require("./dishes");
const ingredientsRoute = require("./ingredients");
const recipesRoute = require("./recipes");

// server init
const server = express();

// Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("dev"));

// Routers
server.use("/api/dishes", dishesRoute);
server.use("/api/ingredients", ingredientsRoute);
server.use("/api/recipes", recipesRoute);

const port = process.env.PORT || 2000;

server.listen(port, () => console.log(`Listening on port ${port}`));
