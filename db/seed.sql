\c groups_dev;

INSERT INTO groups (name, main_focus, date_formed, contact_email) VALUES
('Math Masters', 'Math', '12/02/2021 11:00', 'info@studyup.math.netlify.app'),
('Science Samurais', 'Science', '12/02/2021 11:00', 'info@studyup.science.netlify.app'),
('Gym Rats', 'Gym', '12/02/2021 11:00', 'info@studyup.gym.netlify.app'),
('English Egalitarians', 'English', '12/02/2021 11:00', 'info@studyup.english.netlify.app');

INSERT INTO events (name, virtual_meeting_link, study_group_id, start_time, end_time, number_of_attendees) VALUES
('Monthly Math Mixup', 'https://zoom.us/j/7144663193', '1', '12/02/2021 11:00', '12/02/2021 12:00', 8),
('Monthly Samurai Social', 'https://zoom.us/j/7144663193', '2', '12/02/2021 11:00', '12/02/2021 12:00', 5),
('Monthly Gym Jam', 'https://zoom.us/j/7144663193', '3', '12/02/2021 11:00', '12/02/2021 12:00', 11),
('Annual Dance - Romeo & Juliet', 'https://zoom.us/j/7144663193', '4', '12/02/2021 11:00', '12/02/2021 12:00', 49);