
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Notes App Backend is running successfully!"
    });
});

// Notes API routes
app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 5002;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Notes API running at http://localhost:${PORT}`);
    });
};

startServer();
