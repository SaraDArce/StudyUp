const express = require("express");
const groups = express.Router();
const { getAllGroups } = require("../queries/groups");

// INDEX

groups.get("/", async (req, res) => {
  const allGroups = await getAllGroups();
  if (allGroups[0]) {
    res.status(200).json(allGroups);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = groups;
