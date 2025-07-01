# 🛒 Product Dashboard

A full-stack MERN application to create and view products, built with React, Express, and MongoDB.

---

## 🔗 Live URL

**🌐 [Visit the Live App](https://product-dashboard-gr2v.onrender.com)**

---

## 📦 Features

- Add a new product (name, price, image URL)
- View all added products
- Toast notifications for feedback
- Light and dark mode support
- Clean and responsive UI with Chakra UI

---

## 🧑‍💻 Tech Stack

- **Frontend:** React (Vite), Chakra UI, Zustand
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Deployment:** Render

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js installed
- MongoDB URI (from MongoDB Atlas or local)

### Steps

```bash
# Clone the repository
git clone https://github.com/ANJALI-G1/Product-Dashboard.git
cd Product-Dashboard

# Install dependencies
npm install
cd frontend
npm install

# Set up environment
# In backend/.env, add:
MONGO_URI=your_mongodb_connection_string

# Run the server
cd ..
npm run dev

# Run the frontend separately
cd frontend
npm run dev
