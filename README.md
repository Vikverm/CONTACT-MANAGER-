# 📇 ContactPro – Smart Contact Management System (MERN Stack)

A modern **full-stack MERN Contact Management System** with authentication, analytics dashboard, favorites, premium UI, dark/light theme, CSV export, and real-time contact management.

Built using **MongoDB, Express.js, React.js, and Node.js (MERN Stack)** to demonstrate real-world full-stack development skills.

---

## 🚀 Live Demo

### 🌐 Frontend (Netlify)

👉 https://contactmanagerpro.netlify.app/

### ⚙️ Backend API (Render)

👉 https://contact-manager-jn7a.onrender.com/

---

## 📸 Features Preview

✨ Premium Dashboard
✨ Dark / Light Mode
✨ Contact Analytics
✨ Favorites System
✨ JWT Authentication
✨ Protected Routes
✨ Export Contacts as CSV
✨ Real-Time Contact Updates
✨ Responsive UI

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Recharts (Analytics)
* Lucide React Icons
* useState & useEffect

### Backend

* Node.js
* Express.js
* JWT Authentication
* REST APIs

### Database

* MongoDB Atlas
* Mongoose ODM

### Deployment

* Netlify (Frontend)
* Render (Backend)
* MongoDB Atlas (Database)

---

# ✨ Features

## 🔐 Authentication

✅ User Registration

✅ Secure Login

✅ JWT Token Authentication

✅ Protected Routes

✅ Persistent Sessions

---

## 📇 Contact Management

✅ Add Contacts

✅ Edit Contacts

✅ Delete Contacts

✅ Favorite Contacts

✅ Contact Categories

✅ Dynamic Contact Updates

---

## 📊 Analytics Dashboard

✅ Real-Time Growth Preview

✅ Contact Statistics

✅ Dynamic Bar Charts

✅ Category Insights

✅ Light/Dark Compatible Analytics

---

## ⭐ Favorites

✅ Mark Favorite Contacts

✅ Dedicated Favorites Page

✅ Quick Access to Important Contacts

---

## 🎨 Premium UI/UX

✅ Modern Premium Dashboard

✅ Responsive Design

✅ Sidebar Navigation

✅ Glassmorphism UI

✅ Animated Buttons

✅ Dark / Light Theme Toggle

---

## 📁 CSV Export

✅ Export Contact Data to CSV

---

## 🌐 REST API Endpoints

| Method | Endpoint             | Description      |
| ------ | -------------------- | ---------------- |
| POST   | `/api/auth/register` | Register User    |
| POST   | `/api/auth/login`    | Login User       |
| GET    | `/api/contacts`      | Get All Contacts |
| POST   | `/api/contacts`      | Add Contact      |
| PUT    | `/api/contacts/:id`  | Update Contact   |
| DELETE | `/api/contacts/:id`  | Delete Contact   |

---

## 📂 Project Structure

```txt
contact-manager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── contactController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── contactRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.js
│   │   │   ├── ContactList.js
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── StatCard.jsx
│   │   │
│   │   ├── layouts/
│   │   │   └── DashboardLayout.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Contacts.jsx
│   │   │   ├── Favorites.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Settings.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.js
│   │   ├── index.css
│   │   └── index.js
│   │
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── README.md
```

---

# ▶️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Vikverm/CONTACT-MANAGER-.git
cd contact-manager
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs on:

```txt
http://localhost:5000
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```txt
http://localhost:3000
```

---

## 🔑 Environment Variables

Create `.env` inside backend:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

# 🧠 Learning Outcomes

Through this project, I learned:

✅ MERN Stack Development

✅ Authentication & Authorization (JWT)

✅ REST API Development

✅ MongoDB Atlas Integration

✅ Protected Routes

✅ Dynamic Dashboard Analytics

✅ State Management in React

✅ Responsive UI Development

✅ Full-Stack Deployment

---

# 📈 Resume Highlights

This project demonstrates:

✔ Full-Stack MERN Development

✔ Authentication System

✔ CRUD Operations

✔ API Integration

✔ Dashboard Analytics

✔ Production Deployment

✔ Responsive Design

---

# 🚀 Future Enhancements

* Search & Filter Contacts
* Pagination
* Email Notifications
* Profile Image Upload
* Contact Groups
* Advanced Analytics

---

# 👨‍💻 Author

**Vikas Verma**

Aspiring **Full Stack MERN Developer**

---

# 📄 License

This project is developed for portfolio, educational, and internship purposes.

---

# ⭐ Final Note

**ContactPro** is a production-ready MERN stack project showcasing modern full-stack development, premium UI design, analytics dashboards, authentication, and scalable architecture suitable for **internships, placements, and portfolio projects**.
