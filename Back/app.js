require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

// DB connection
const connectedDB = require("./config/db");
connectedDB();

// Routes
const authRoute = require("./routes/authRoutes");
const adminRoute = require("./routes/adminRoute");
const ticketRoutes = require("./routes/ticketRoutes");
const reportsRoutes = require('./routes/reportsRoutes');


// API routes
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/tickets", ticketRoutes);

// 2. تفعيل المسار تحت مع باقي الـ app.use
app.use("/api", reportsRoutes);
// test route
app.get("/", (req, res) => {
  res.send("Server Working");
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});