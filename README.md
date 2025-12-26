🚀 Simple Express.js Server (MVC Pattern)

A basic backend server built with Express.js following a simple MVC (Model–View–Controller) architecture.
This project is designed to help beginners understand backend fundamentals, routing, and controller separation.

📌 Features

Express.js server

Beginner-friendly MVC structure

Handles GET and POST requests

JSON request & response handling

Clean and organized codebase

🧩 Project Structure
project-root/
│
├── controllers/
│   └── mainController.js
│
├── routes/
│   └── mainRoutes.js
│
├── server.js
├── package.json
└── README.md

📍 Available Routes
Method	Route	Description
GET	/	Welcome message
GET	/about	About response
GET	/contact	Contact response
GET	/time	Returns current server time
POST	/echo	Accepts JSON input and returns it
🔄 MVC Responsibilities

Routes → Handle routing only

Controllers → Handle all request & response logic

Server → Initializes the app and middleware

⚙️ Installation & Setup

Clone the repository

git clone <repository-url>


Navigate into the project

cd project-root


Install dependencies

npm install


Start the server

npm start


The server will run on:

http://localhost:3000
