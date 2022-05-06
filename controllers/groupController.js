const express = require("express");
const groups = express.Router();
const {
  getAllGroups,
  getGroup,
  createGroup,
  updateGroup,
  showActiveGroups,
  showInactiveGroups,
  showAllActOrInactGroups
} = require("../queries/groups.js");

const eventsController = require("./eventController.js");

groups.use("/:study_group_id/events", eventsController);

// INDEX

groups.get("/", async (req, res) => {
  const allGroups = await getAllGroups();
  if (allGroups[0]) {
    res.status(200).json(allGroups);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
groups.get("/:id", async (req, res) => {
  const { id } = req.params;
  const group = await getGroup(id);
  if (group) {
    res.json(group);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
groups.post("/", async (req, res) => {
  try {
    const group = await createGroup(req.body);
    res.json(group);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

groups.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedGroup = await updateGroup(id, body);
  if (updatedGroup.id) {
    res.status(200).json(updatedGroup);
  } else {
    res.status(404).json({ error: "Group not found" });
  }
});



module.exports = groups;
