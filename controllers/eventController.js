const express = require("express");
const events = express.Router({ mergeParams: true });
const {
  getAllEvents,
  getEvent,
  newEvent,
  updateEvent,
} = require("../queries/events");

// INDEX
events.get("/", async (req, res) => {
  const { study_group_id } = req.params;
  const allEvents = await getAllEvents(study_group_id);
  if (allEvents[0]) {
    res.status(200).json(allEvents);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
events.get("/:id", async (req, res) => {
  const { id } = req.params;
  const event = await getEvent(id);
  if (event) {
    res.json(event);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

events.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedEvent = await updateEvent(id, req.body);
  if (updatedEvent.id) {
    res.status(200).json(updatedEvent);
  } else {
    res.status(404).json("Event not found");
  }
});

events.post("/", async (req, res) => {
  const event = await newEvent(req.body);
  res.status(200).json(event);
});

module.exports = events;
