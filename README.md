```markdown
# 💬 Chat App

A full-stack real-time chat application built with **MERN stack**, **Socket.IO**, and **Tailwind CSS**, supporting image uploads and live messaging.

> ⚠️ This project was created by referring to a YouTube tutorial for learning purposes. The implementation is inspired by the original video, with custom modifications and styling.

---

## 📁 Project Structure

```

chat-app/
├── backend/        # Express server with MongoDB and Socket.IO
├── frontend/       # React + Vite + Tailwind 
├── root files         # Shared scripts and combined install commands

````

---

## 🚀 Features

- Realtime messaging with **Socket.IO**
- User authentication using **JWT**
- Secure password storage with **bcrypt**
- **MongoDB** database integration via Mongoose
- Image uploads using **Cloudinary**
- Clean UI with **React**, **TailwindCSS**, and **DaisyUI**
- Global state management with **Zustand**

---

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- Zustand
- Tailwind CSS & DaisyUI
- Lucide Icons
- Socket.IO Client

**Backend:**
- Express.js
- Mongoose
- Socket.IO
- JWT Auth
- Cloudinary

---

## 📦 Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB running locally
- Internet connection (for Cloudinary API)

---

## 🔧 Local Development Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Raghavgupta2003/Real-Time-Chat-Application
cd chat-app
````

### 2️⃣ Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
MONGODB_URI=mongodb://localhost:27017/chat_db
PORT=5001
JWT_SECRET=your_jwt_secret
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 3️⃣ Install Dependencies (Both Frontend & Backend)

From the root (`chat-app/`) directory:

```bash
npm run build
```

This will install packages in both `backend/` and `frontend/`.

### 4️⃣ Start the App

Start the backend server:

```bash
npm start
```

In a separate terminal, start the frontend app:

```bash
cd frontend
npm run dev
```

The app should now be available at [http://localhost:5173](http://localhost:5173)

---

## 🙏 Acknowledgment

> This project was built by following a tutorial on YouTube. All credit for the core concept and guidance goes to the original content creator.
> I have modified and extended the project with my own implementations, styling, and customizations for learning purposes.

---
