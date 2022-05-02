// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const res = require("express/lib/response");
const groupsController = require("./controllers/groupController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to StudyUp");
});
app.use("/groups", groupsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
