const db = require("../db/dbConfig.js");

const getAllGroups = async () => {
  try {
    const allGroups = await db.any("SELECT * FROM groups");
    return allGroups;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllGroups };
