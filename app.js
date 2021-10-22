const express = require("express");
const morgan = require("morgan");

const appRouter = require("./routes/appRoutes");

const app = express();

// MIDDLEWARES
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/", appRouter);

module.exports = app;
