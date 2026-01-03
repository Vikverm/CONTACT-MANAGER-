📇 Contact Management Web App (MERN Stack)
📌 Objective

To build and deploy a Contact Management Web Application demonstrating core MERN stack fundamentals, including frontend development with React, backend REST APIs using Node.js and Express, and database integration with MongoDB.

🚀 Live Demo

Frontend (Netlify):
👉 https://contact-manager0.netlify.app/

Backend API (Render):
👉 https://contact-manager-jn7a.onrender.com/api/contacts

🛠️ Tech Stack
Frontend

React.js

useState & useEffect (State Management)

Axios (API calls)

CSS (Styling)

Backend

Node.js

Express.js

RESTful API architecture

Database

MongoDB Atlas

Mongoose ODM

Deployment

Backend: Render

Frontend: Netlify

✨ Features
✅ Contact Form

Fields:

Name (required)

Email (required, valid format)

Phone (required)

Message (optional)

Client-side validation with error messages

Real-time validation while typing

Submit button disabled if form is invalid

Success message after submission

✅ Backend APIs

POST /api/contacts → Store contact data

GET /api/contacts → Fetch all contacts

DELETE /api/contacts/:id → Delete a contact (Bonus)

✅ Database Integration

MongoDB schema designed using Mongoose

Data stored persistently in MongoDB Atlas

CRUD operations implemented

✅ Contact Display

Contacts displayed dynamically without page reload

Real-time UI update after adding or deleting contacts

Loading and empty states handled properly

✅ UI & UX

Clean and professional layout

Responsive design

Validation error messages shown clearly

Loading indicator during API requests

📂 Project Structure
contact-manager/
│
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── public/
    │   └── _redirects
    ├── src/
    │   ├── components/
    │   │   ├── ContactForm.js
    │   │   └── ContactList.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json

▶️ How to Run Locally
Backend
cd backend
npm install
node server.js


Backend runs on:

http://localhost:5000/api/contacts  or   https://contact-manager-jn7a.onrender.com/api/contacts/

Frontend
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000  or    https://contact-manager0.netlify.app/

🌐 API Endpoints
Method	Endpoint	Description
POST	/api/contacts	Add new contact
GET	/api/contacts	Fetch all contacts
DELETE	/api/contacts/:id	Delete contact
🧠 Learning Outcomes

Understanding MERN stack architecture

REST API development with Express

MongoDB Atlas integration

Client-side validation in React

State management using hooks

Full-stack deployment using cloud platforms

📊 Evaluation Criteria Alignment
Criteria	Status
MERN understanding	✅
API structure	✅
Database usage	✅
Code quality	✅
UI & UX	✅
👨‍💻 Author

Vikas Verma

📄 License

This project is developed for educational and internship evaluation purposes.

🚀 Future Enhancements

Edit contact functionality

Search and filter contacts

Pagination

Authentication (login/signup)

✅ Final Note

This project is fully functional, deployed, and internship-ready, demonstrating real-world MERN stack development and deployment.
