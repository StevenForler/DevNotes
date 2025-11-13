Normally comments aren't allowed in some apps as it just throws errors when they're added
# rest files are usually for emulating the browser

### GET /
GET http://localhost:5003

### Register a user POST /AUTH/REGISTER
POST http://localhost:5003/auth/register
Content-Type: application/json

{ <!-- when testing a client request like registering or logging in you have to add the information to this page page.
    formatting matters so adding a space above this section(line 10) is important. (however its not exactly explained why ¯\_(ツ)_/¯ ) -->
    "username": "gilgamesh@gmail.com",
    "password": "123123123"
}

### Login a user POST /AUTH/LOGIN
POST http://localhost:5003/auth/login
Content-Type: application/json

{
    "username": "gilgamesh@gmail.com",
    "password": "123123123"
}

### Fetch all todos GET /TODOS (protected)
GET http://localhost:5003/todos
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMxOTA2NDE3LCJleHAiOjE3MzE5OTI4MTd9.0vg4uoLjN2K-G5rR7Nogbq1wcEUMsNJ-CtClsYdLFaM

### Creates a new todo POST /TODOS (protected)
POST http://localhost:5003/todos
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMxOTA2NDE3LCJleHAiOjE3MzE5OTI4MTd9.0vg4uoLjN2K-G5rR7Nogbq1wcEUMsNJ-CtClsYdLFaM
Content-Type: application/json 

{
    "task": "Finish coding the projects"
}

### Update a todo PUT /TODOS/:ID (protected)
PUT http://localhost:5003/todos/2?page=4
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMxOTA2NDE3LCJleHAiOjE3MzE5OTI4MTd9.0vg4uoLjN2K-G5rR7Nogbq1wcEUMsNJ-CtClsYdLFaM
Content-Type: application/json

{
    "completed": 1
}

### Delete a todo DELETE /TODOS/:ID (protected)
DELETE http://localhost:5003/todos/2
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMxOTA2NDE3LCJleHAiOjE3MzE5OTI4MTd9.0vg4uoLjN2K-G5rR7Nogbq1wcEUMsNJ-CtClsYdLFaM