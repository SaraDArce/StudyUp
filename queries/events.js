const db = require("../db/dbConfig.js");

const getAllEvents = async (study_group_id) => {
  try {
    const allEvents = await db.any(
      "SELECT * FROM events WHERE study_group_id=$1",
      study_group_id
    );
    return allEvents;
  } catch (err) {
    return err;
  }
};

const newEvent = async (event) => {
  try {
    const newEvent = await db.one(
      "INSERT INTO events (name, virtual_meeting_link, study_group_id, start_time, end_time, number_of_attendees) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        event.name,
        event.virtual_meeting_link,
        event.study_group_id,
        event.start_time,
        event.end_time,
        event.number_of_attendees,
      ]
    );
    return newEvent;
  } catch (error) {
    return error;
  }
};

const getEvent = async (id) => {
  try {
    const oneEvent = await db.one("Select * FROM events WHERE id=$1", id);
    return oneEvent;
  } catch (err) {
    return err;
  }
};

const updateEvent = async (id, event) => {
  try {
    const updatedEvent = await db.one(
      "UPDATE events SET name=$1, virtual_meeting_link=$2, study_group_id=$3, start_time=$4, end_time=$5, number_of_attendees=$6  RETURNING*",
      [
        event.name,
        event.virtual_meeting_link,
        event.study_group_id,
        event.start_time,
        event.end_time,
        event.number_of_attendees,
        id,
      ]
    );
    return updatedEvent;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllEvents,
  getEvent,
  newEvent,
  updateEvent,
};
