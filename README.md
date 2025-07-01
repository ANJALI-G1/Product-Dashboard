Here is your complete `README.md` file — ready to copy and paste into your project:

---

```markdown
# 🛒 Product Dashboard

A full-stack MERN application that allows users to **create** and **view** products with a simple and elegant UI.

---

## 🔗 Live Demo

🌐 [Live Application](https://product-dashboard-1-t7eu.onrender.com)

---

## 📸 Screenshots

> *(Optional: Add screenshots here once you capture them)*  
Example:
```

![Homepage Screenshot](URL_TO_YOUR_IMAGE)

```

---

## 📁 Project Structure

```

product-dashboard/
├── backend/
│   ├── config/
│   ├── controller/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── store/
│       └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── ...

````

---

## ✨ Features

- 📦 View all available products
- ➕ Add a new product with name, price, and image
- 🌙 Light/Dark mode toggle using Chakra UI
- ⚡ Toast notifications for actions
- ⚙️ Zustand for global state management
- 🧩 Modular and clean component structure

---

## 🚀 Tech Stack

**Frontend:**
- React (via Vite)
- Chakra UI
- Zustand

**Backend:**
- Node.js
- Express
- MongoDB with Mongoose

**Deployment:**
- Render (Backend + Frontend)

---

## 🧑‍💻 Getting Started Locally

### 🔧 Prerequisites

- Node.js
- npm or yarn
- MongoDB (local or Atlas)

---

### ⚙️ Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/ANJALI-G1/Product-Dashboard.git
cd Product-Dashboard

# 2. Install root dependencies
npm install

# 3. Install frontend dependencies
cd frontend
npm install

# 4. Add environment variables
# Create a .env file inside /backend and add:
MONGO_URI=your_mongodb_connection_string

# 5. Start the backend server
cd ..
npm run dev

# 6. Start the frontend
cd frontend
npm run dev
````

---

## 🗃️ Deployment Notes

Make sure the frontend is built before deployment:

```bash
cd frontend
npm run build
```

Your Express server should serve from the `frontend/dist` directory using:

```js
// backend/server.js
import path from 'path';
app.use(express.static(path.resolve('frontend', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'dist', 'index.html'));
});
```

---

## 📜 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

---

## 🙋‍♀️ Author

**Anjali Gupta**
🔗 [GitHub](https://github.com/ANJALI-G1)

---

```

Let me know if you want me to create the actual `LICENSE` file too.
```
