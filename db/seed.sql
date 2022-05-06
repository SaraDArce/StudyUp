\c groups_dev;

INSERT INTO groups (name, main_focus, is_active, date_formed, contact_email) VALUES
('Math Masters', 'Math', true, '12/02/2021 11:00', 'info@studyup.math.netlify.app'),
('Science Samurais', 'Science', true, '12/02/2021 11:00', 'info@studyup.science.netlify.app'),
('Gym Rats', 'Gym', true, '12/02/2021 11:00', 'info@studyup.gym.netlify.app'),
('English Egalitarians', 'English', true, '12/02/2021 11:00', 'info@studyup.english.netlify.app');

INSERT INTO events (study_group_id, name, virtual_meeting_link, start_time, end_time, number_of_attendees) VALUES
('1', 'Monthly Math Mixup', 'https://zoom.us/j/7144663193', '12/02/2021 11:00', '12/02/2021 12:00', 8),
('2', 'Monthly Samurai Social', 'https://zoom.us/j/7144663193', '12/02/2021 11:00', '12/02/2021 12:00', 5),
('3', 'Monthly Gym Jam', 'https://zoom.us/j/7144663193', '12/02/2021 11:00', '12/02/2021 12:00', 11),
('4', 'Annual Dance - Romeo & Juliet', 'https://zoom.us/j/7144663193', '12/02/2021 11:00', '12/02/2021 12:00', 49);