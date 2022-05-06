DROP DATABASE IF EXISTS groups_dev;
CREATE DATABASE groups_dev;

\c groups_dev;

CREATE TABLE groups (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    main_focus TEXT NOT NULL,
    is_active BOOLEAN,
    date_formed TEXT, 
    contact_email TEXT
);


DROP DATABASE IF EXISTS events;

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name TEXT,
    virtual_meeting_link TEXT, 
    start_time TEXT, 
    end_time TEXT,
    number_of_attendees NUMERIC,
    study_group_id INTEGER REFERENCES groups (id)
);