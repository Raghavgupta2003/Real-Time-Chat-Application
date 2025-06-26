
---

## 📄 Real-Time Chat Application – Architecture & Flow

### 🚀 Overview

This is a real-time chat app built using the **MERN stack** (MongoDB, Express.js, React, Node.js) along with **Socket.IO** to enable live messaging between users. It lets users sign up, log in, and chat instantly — just like WhatsApp, but much simpler.

---

### 🧱 Architecture Summary

* **Frontend**: React (with Vite)
* **Backend**: Node.js + Express
* **Database**: MongoDB (stores users and chat messages)
* **Real-time Messaging**: Socket.IO (WebSockets)

```plaintext
[ React Frontend ]
       |
       |  REST APIs (Login, Signup, Messages)
       |
[ Express + Node.js Backend ]
       |
       |  WebSocket (Real-time chat via Socket.IO)
       |
[ MongoDB Database ]
```

---

### 🔄 How the App Works (Flow)

#### 1. **User Signup/Login**

* Users can create an account or log in.
* On success, a **JWT token** is stored in a secure cookie for authentication.

#### 2. **Connecting via Socket.IO**

* Once logged in, the frontend connects to the backend using **WebSocket**.
* The server tracks online users in real-time.

#### 3. **Fetching Conversations**

* Chat history is loaded from MongoDB using API calls.
* Messages are shown in the chat window.

#### 4. **Real-Time Messaging**

* When a user sends a message:

  * It’s sent through **Socket.IO** to the backend.
  * The backend saves it to the database.
  * The message is instantly delivered to the recipient’s screen.

#### 5. **Sending Images**

* Users can also send image messages.
* Images are previewed and sent as base64 strings.

---

### 📁 Project Structure (Short Overview)

#### Frontend (`/frontend`)

* `pages/` – Signup, Login, Home
* `components/` – Chat interface, header, input box
* `store/` – Zustand state management
* `lib/` – Utility functions

#### Backend (`/backend`)

* `routes/` – Auth and message routes
* `controllers/` – Logic to handle requests
* `middleware/` – Authentication with JWT
* `lib/` – MongoDB connection
* `utils/` – Helper functions like token generation

---

### ✅ Features

* Real-time 1-on-1 chat
* JWT-based authentication
* Image sharing
* Socket.IO for instant message delivery

---

Let me know when you're ready for a deployment guide or documentation setup.
