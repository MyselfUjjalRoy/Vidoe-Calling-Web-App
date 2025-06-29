Absolutely, Ujjal! Here's a professional and detailed `README.md` file for your **Video Calling Web App** that you can directly copy and paste into your GitHub repo.

---

## 📄 `README.md` — Video Calling Web App

```markdown
# 📹 Video Calling Web App

A full-stack real-time video calling application built using **React**, **Express.js**, **Socket.io**, and **MongoDB**. This app allows users to register, log in, create/join meetings, and view their activity history.

## 📦 Tech Stack

### 🔧 Backend:
- Node.js
- Express.js
- MongoDB (via Mongoose)
- Socket.IO (real-time communication)
- bcryptjs (authentication)
- dotenv (environment configs)
- CORS, HTTP-Status

### 🎨 Frontend:
- React.js
- React Router
- Axios
- Socket.IO Client
- Tailwind CSS

---

## 🔐 Features

- ✅ User registration & login
- ✅ Token-based authentication (via localStorage)
- ✅ Join meetings via unique meeting code
- ✅ Real-time video/audio calling using WebRTC
- ✅ Activity history tracking per user
- ✅ Socket.io for signaling & user connection handling


## 🔧 Setup Instructions

### 🖥️ Clone the Repository

```bash
git clone https://github.com/your-username/Video-Calling-Web-App.git
cd Video-Calling-Web-App
````

---

### ▶️ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=8000
MONGO_URI=your_mongo_uri_here
```

Run backend locally:

```bash
npm run dev
```

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
REACT_APP_API_URL=https://zoom-backend.onrender.com
REACT_APP_SOCKET_URL=https://zoom-backend.onrender.com
```

Run frontend locally:

```bash
npm start
```



## 🙋‍♂️ Author

**Ujjal Roy**
MCA Student, MNNIT Allahabad
📍 Siliguri, West Bengal
🔗 [GitHub](https://github.com/MyselfUjjalRoy)

---

