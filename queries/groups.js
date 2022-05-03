const db = require("../db/dbConfig.js");

const getAllGroups = async () => {
  try {
    const allGroups = await db.any("SELECT * FROM groups");
    return allGroups;
  } catch (err) {
    return err;
  }
};

const createGroup = async (group) => {
  try {
    const newGroup = await db.one(
      "INSERT INTO groups (name, main_focus, date_formed, contact_email) VALUES($1, $2, $3, $4) RETURNING *",
      [group.name, group.main_focus, group.date_formed, group.contact_email]
    );
    return newGroup;
  } catch (err) {
    return err;
  }
};

// ONE Group

const getGroup = async (id) => {
  try {
    const oneGroup = await db.one("SELECT * FROM groups WHERE id=$1", id);
    return oneGroup;
  } catch (err) {
    return err;
  }
};

const updateGroup = async (id, group) => {
  try {
    const updatedGroup = await db.one(
      "UPDATE groups SET name=$1, main_focus=$2, date_formed=$3, contact_email=$4 WHERE id=$5 RETURNING *",
      [group.name, group.main_focus, group.date_formed, group.contact_email, id]
    );
    return updatedGroup;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllGroups,
  createGroup,
  getGroup,
  updateGroup,
};
