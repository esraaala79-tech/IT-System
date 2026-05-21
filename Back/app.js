require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

// DB connection
const connectedDB = require("./config/db");
connectedDB();

// Routes
const authRoute = require("./routes/authRoutes");
const adminRoute = require("./routes/adminRoute");
const ticketRoutes = require("./routes/ticketRoutes");

// API routes
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/tickets", ticketRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server Working");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});