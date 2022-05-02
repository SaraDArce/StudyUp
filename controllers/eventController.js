const express = require("express");
const events = express.Router();
const eventsContoller = require("./controllers/eventController.js")

// INDEX
events.get("/", (req, res) => {
  res.json({ status: "ok" });
});



module.exports = events;
