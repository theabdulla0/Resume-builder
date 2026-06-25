# 🧾 Resume Builder

A premium, modern, full-stack web application that allows users to seamlessly create, customize, preview, and download professional, ATS-friendly resumes. Built with a robust **Node.js/Express** backend and a dynamic **React/Vite/TailwindCSS** frontend.

<p align="center">
  <strong>Build, save, preview, and export your professional resume in minutes!</strong><br>
  🌐 Live Demo: <a href="https://resume-builder-oxu6.vercel.app/" target="_blank">GitHub Repository</a>
</p>

---

## 🚀 Features

### 🌟 Core Capabilities
* 🔑 **Secure Authentication**: User sign-up and sign-in powered by **JWT (JSON Web Tokens)** and **bcryptjs** password hashing.
* 💾 **Cloud Storage**: Save your progress! Resumes are stored securely in **MongoDB Atlas** so you can access, edit, or delete them anytime.
* ⚡ **Real-Time Live Preview**: See changes instantly in a beautifully formatted resume template as you type.
* 📄 **One-Click PDF Export**: High-fidelity PDF generation using **html2pdf.js**, **jspdf**, and **html2canvas**.
* 📱 **Responsive & Glassmorphic UI**: Tailored with TailwindCSS for fluid layouts and smooth micro-animations on all devices.

---

## 🏷️ Tech Stack

### Frontend
* **React 19** & **Vite** for blazing fast compilation and updates
* **TailwindCSS** (using the new `@tailwindcss/vite` configuration) for beautiful modern styling
* **React Router Dom (v7)** for client-side routing
* **Lucide React** & **React Icons** for clean, modern interface iconography
* **React Hot Toast** & **React Toastify** for rich notifications and feedback

### Backend & Database
* **Node.js** & **Express.js** for RESTful API routing and middleware execution
* **MongoDB Atlas** & **Mongoose** for data storage and schema modeling
* **JSON Web Tokens (JWT)** for stateless session authentication
* **Multer** for handling multipart file uploads (e.g., profile pictures)
* **Nodemon** for local hot-reloading development

---

## 📂 Project Structure

```text
Resume-Builder/
├── backend/
│   ├── config/          # DB connections and third-party setups
│   ├── controllers/     # Route logic implementation
│   ├── middlewares/     # Auth and error validation guards
│   ├── models/          # Mongoose DB schema definitions
│   ├── routes/          # API route definitions
│   ├── uploads/         # Local file uploads directory
│   ├── .env             # Backend environment configurations
│   ├── server.js        # Backend entry point
│   └── package.json
└── frontend/
    ├── public/          # Public assets
    ├── src/
    │   ├── components/  # Reusable UI elements
    │   ├── pages/       # Page components (Login, Register, Dashboard, Editor)
    │   ├── utils/       # API endpoints, styling, helper functions
    │   ├── App.jsx      # Main application router
    │   └── main.jsx     # Frontend entry point
    ├── vite.config.js   # Vite configuration
    └── package.json
```

---

## ⚙️ Installation & Local Setup

Follow these steps to spin up the application on your local machine:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/theabdulla0/Resume-builder.git
cd Resume-builder
```

### 2️⃣ Configure & Run Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the `backend/` directory (or use the existing one) and fill out the configuration:
   ```env
   PORT=5000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_token
   ```
4. Start the backend development server:
   ```bash
   npm start
   ```
   *The backend should run on `http://localhost:5000`.*

### 3️⃣ Configure & Run Frontend
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend should run on `http://localhost:5173`.*

---

## 🌐 Deploying to Production

* **Frontend**: Can be easily deployed using platforms like **Vercel** or **Netlify**. Ensure the API URL endpoints in the frontend reference the deployed backend address.
* **Backend**: Can be deployed to hosting services like **Render**, **Railway**, or **Heroku**. Set the `.env` configuration variables inside the host provider's dashboard.

---

## 🤝 Contributing
Contributions are always welcome! Feel free to open an issue or submit a pull request if you want to improve features, fix styling bugs, or add new templates.

## 📄 License
This project is licensed under the ISC License.
