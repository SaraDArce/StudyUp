# StudyUp

## Study Groups Meetup Application

### Study Buddies

Back-end Take Home Coding Challenge
This is a take home coding challenge where you will build a RESTful API using Express and Postgres.
Typically, coding challenges are usually estimated to be 1 day's worth of work for your skill level and one should be wary of challenges that expect more time from you than that, especially the ones that require a week or more of work.
However, because this is a practice coding challenge, where you are still in a supportive learning environment, you have an opportunity to really sharpen your skills and make sure you can approach future projects with the knowledge and confidence required to do well. Therefore this app, for many of you, is likely going to take more than 7 hours of work.
It may have been a while since you worked on a backend/with a database, that's ok! Most of your code challenges will require you to either revisit something you learned a while ago or to learn to build a new feature you have not built before. This is something employers are looking for (ability to teach yourself something new on your own).
You should work on this project individually and the work should reflect your current technical ability. If you are struggling a lot or are concerned about not being ready for this kind of assignment, talk to an instructor.

### Background

As part of this take home project, you will be building a study group app. This application has two resources: Groups and Events. Groups represent an organized group such as "Brooklyn Tech Meetup." Each group can host multiple events. For example, "Brooklyn Tech Meetup" might host an event on "Getting Started with React" as well as an event called "Networking for Junior Developers."

### Getting Started

- Create a new private repository on GitHub
- Add your instructors as collaborators
- Create a basic Express app that will have a Postgres database
- Don't forget to have schema and seed files
- Deploy it to Heroku
- Create a README.md describing the project and how to get it set up
  -- Be sure to also include a link to your deployed API.

### Technical requirements

You are required to build a RESTful API as part of this project. You do not need to build any views as part of this project. You must test all your routes with Postman to confirm they work as expected.

**Routes**
Instead of making views, you should build the following routes:
| Resource | Method | Resource | Description |
| ----------- | ----------- |----------- | ----------- |
| Groups | GET |/groups | Returns a list of all groups|
| Groups | POST |/groups | Creates a new group|
| Groups | GET |/groups/{gid} | Returns details about the group with an id of {gid}|
| Groups | PUT |/groups/{gid} | Update details of the group with an id of{gid}|
| Events | GET |/groups/{gid}/events | Return all events associated with the group with and id of{gid}|
| Events | POST |/groups/{gid}/events | Creates a new event associated with the group with an id of {gid}|
| Events | GET |/events/{eid} | Returns the details of an event with an id of{eid}|
| Events | PUT |/events/{eid} | Update details of the event with an id of{eid}|

**_Models_**
As part of the project, create the following models. Each model should be represented by a table in your database. Required database fields and a description of those fields are described below.

_Study Groups_

- **name:** string (unique, required)
- **main_focus:** string (e.g "JavaScript", "knitting", "photography", "machine learning", etc.)
- **date_formed:** datetime
- **contact_email:** string

_Events_

- **name:** string (required)
- **virtual_meeting_link:** a url (i.e. like a zoom link, does not have to be a real link)
- **study_group_id:** foreign key (required)
- **start_time:** datetime
- **end_time:** datetime
- **number_of_attendees:** integer

**_Stretch: Users_**
You should push yourself to complete these routes, but they are not required to do the pairing activity

- Create a user
- See a list of users
- See details of one user
- Update a user
- Delete a user

**_Models_**
_Study Groups_

- name : string (unique, required)
- main_focus : string ( JavaScript, knitting, photography, machine learning...) - formed : Date
- contact : string

_Events_

- name : string (required)
- virtual_meeting_link: a url (like a zoom link, does not have to be a real link)
- study group: foreign key (required)
- start_time: date time
- end_time: date time
- number_of_attendees: integer
- cancelled: boolean (default false)

_Users_

- username: string (required)
- first_name: string
- last_name: string
- password : string
- email : string (required, unique)

### Relationships

- A study group has many events
- Events belong to a study group-

### Test All Routes

All routes should be tested with Postman
All dates should be entered as a string using the default format in PostgreSQL

### A Note About Dates

Postgres will accept the following two formats:

- '12/02/2021 11:00' , '12/02/2021 14:00'
- "2021-12-02T17:11:00.000Z" , "2021-12-02T17:14:00.000Z"

Where 14 represents 2pm, as part of a 24 clock.
When creating items with time, just use a string with the correct formatting. Do not worry about creating logic to deal with multiple types of inputs/correcting wrong inputs.

**_Super Stretch_**

- Add RESTful routes and relationships so users can attend many events and events can have many attendees (users)
- Add the ability to see the names of the people attending an event
