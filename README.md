# 🚚 MERN Shipments Backend

This is the **backend service** for the MERN Shipments Management Application.  
It provides RESTful API endpoints for creating, reading, updating, and deleting shipment records using **Node.js**, **Express**, and **MongoDB Atlas (Mongoose)**.

---

## 📦 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **dotenv**
- **CORS**
- **Nodemon** (for development)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/mern-shipments-backend.git
cd mern-shipments-backend-test

Install dependencies
npm install


Create a .env file in the project root
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/shipments
PORT=5000

Replace <username> and <password> with your MongoDB Atlas credentials.
If your password contains special characters like @, #, or $, remember to URL encode them.

Run the Application
npm run dev


Server runs on:
👉 http://localhost:5000

When connected successfully, you should see:

MongoDB connected
Server running on port 5000


Folder Structure
mern-shipments-backend-test/
├── controllers/
│   └── shipmentController.js
├── models/
│   └── Shipment.js
├── routes/
│   └── shipmentRoutes.js
├── server.js
├── package.json
└── .env


API ENDPOINTS

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| GET    | `/api/shipments`     | Retrieve all shipments |
| GET    | `/api/shipments/:id` | Retrieve one shipment  |
| POST   | `/api/shipments`     | Create a new shipment  |
| PUT    | `/api/shipments/:id` | Update a shipment      |
| DELETE | `/api/shipments/:id` | Delete a shipment      |


Example Request (POST)
curl -X POST http://localhost:5000/api/shipments \
  -H "Content-Type: application/json" \
  -d '{"origin":"Lagos","destination":"Abuja","status":"Pending"}'


  Deployment

You can deploy this backend to:

Render

Railway

Vercel (Serverless Functions)

After deployment, copy your deployed API base URL and use it in your frontend .env file.

 Author: OPEBIYI OLUWAFEMI BABATUNDE- FULLSTACK ENGINEER


