📘 Companies Directory Application

A modern, responsive Full-Stack Companies Directory application built using:

React.js + Tailwind CSS (Frontend)

Node.js + Express + MongoDB + Mongoose (Backend)

The application lets users browse, filter, sort, and paginate company data with a smooth UI experience and light/dark mode support.

🚀 Features
🌐 Frontend

React functional components with Hooks

Fully responsive UI using Tailwind CSS

Filters: Name, Location, Industry, Size, Founded Year

Sorting + Pagination

Light/Dark Theme Toggle (saved in localStorage)

Graceful loading and error handling

Modular component architecture

🖥️ Backend

RESTful API built using Express

MongoDB connection using Mongoose

Supports complex queries:

Filters

Sorting

Pagination

.env support for secure environment variables

Seeder script to import sample company data

📁 Folder Structure
project-root/
│
├── backend/
│   ├── server.js               # Backend entry point
│   ├── seed.js                 # Seeder script
│   ├── .env                    # MongoDB URI
│   ├── models/
│   │   └── Company.js          # Mongoose schema
│   └── routes/
│       └── companyRoutes.js    # API routes
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── CompanyCard.jsx
    │   │   ├── FilterPanel.jsx
    │   │   ├── CompanyList.jsx
    │   │   ├── PaginationControls.jsx
    │   │   ├── SortOptions.jsx
    │   │   └── ThemeToggle.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── tailwind.config.js
    └── package.json
🛠️ Getting Started
✔ Prerequisites

Make sure you have:

Node.js 18+

MongoDB Atlas or local MongoDB

npm or yarn

🔧 Backend Setup
1️⃣ Navigate to backend folder
cd backend

2️⃣ Create a .env file
MONGODB_URI=your_mongodb_connection_string

3️⃣ Install dependencies
npm install

4️⃣ Seed the database
node seed.js

5️⃣ Start backend server
npm start


Backend will run on:
👉 http://localhost:5000

🎨 Frontend Setup
1️⃣ Navigate to frontend folder
cd frontend

2️⃣ Install dependencies
npm install

3️⃣ Start frontend
npm start


Frontend will run on:
👉 http://localhost:3000

And communicates with backend on port 5000.

🧑‍💻 Usage

Filter companies by name, location, industry, size, or founding year

Sort by name, location, industry

Use pagination to navigate large datasets

Switch between light & dark mode

Clean UI with instant search results

🛠️ Technologies Used
Frontend

React.js

Tailwind CSS

Axios

Backend

Node.js

Express.js

MongoDB (Atlas)

Mongoose

dotenv

📄 License

This project is licensed under the MIT License.
