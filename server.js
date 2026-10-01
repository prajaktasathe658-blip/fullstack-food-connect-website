const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/foods",require("./routes/foodRoutes"));
app.use("/api/requests",require("./routes/requestRoutes"));
app.use(
    "/api/notifications",
    require("./routes/notificationRoutes")
);

app.get("/", (req, res) => {
    res.json({
        message: "FoodConnect API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});