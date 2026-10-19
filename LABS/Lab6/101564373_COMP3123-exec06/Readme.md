# COMP3123 – Lab 6: MongoDB Notes Application

**Student ID:** 101564373  
**Course:** COMP3123 – Full Stack Development I

## Project Description

This project is a RESTful Notes API developed using Node.js, Express.js, Mongoose, and MongoDB.

The application allows users to create, retrieve, update, and delete notes stored in a MongoDB database.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman
- Docker (for running MongoDB locally)

## Installation and Setup

1. Install the required dependencies:

   `npm install`

2. Start a local MongoDB instance on port 27017. For example, using Docker:

   `docker run -d --name kamran-lab6-mongodb -p 27017:27017 mongo:7`

3. Start the Node.js application:

   `npm start`

4. The application runs at:

   `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/notes | Create a new note |
| GET | /api/notes | Retrieve all notes |
| GET | /api/notes/:noteId | Retrieve a single note |
| PUT | /api/notes/:noteId | Update an existing note |
| DELETE | /api/notes/:noteId | Delete a note |

## Sample JSON Request

```json
{
  "noteTitle": "COMP3123 Lab 6",
  "noteDescription": "Testing MongoDB Notes API using Postman",
  "priority": "HIGH"
}
```

## Note Schema

The MongoDB note schema contains the following fields:

- `noteTitle`: Required string
- `noteDescription`: Required string
- `priority`: HIGH, MEDIUM, or LOW
- `dateAdded`: Date the note was created
- `dateUpdated`: Date the note was last updated

## API Testing

All five CRUD endpoints were successfully tested using Postman.

- POST — 201 Created
- GET All — 200 OK
- GET by ID — 200 OK
- PUT — 200 OK
- DELETE — 200 OK

Screenshots of the successful API tests are provided separately for assignment submission.

## Optional Hosting

MongoDB was run locally using Docker. Vercel deployment was not implemented because hosting is optional for this exercise.
