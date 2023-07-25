const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const { DB_HOST } = process.env;

mongoose
    .connect(DB_HOST)
    .then(() => console.log("Database connection successful"))
    .catch((err) => console.log(err.message));

const userNewsRouter = require("./routes/api/news");
const authRouter = require("./routes/api/auth");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/news", userNewsRouter);
app.use("/api/users", authRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    if (err.name === "ValidationError") {
        res.status(400).json({ message: err.message });
    }
    if (err.code === 11000) {
        res.status(409).json({ message: "Already exist" });
    }
    const { status = 500, message = "server error" } = err;
    res.status(status).json({ message });
});

module.exports = app;
