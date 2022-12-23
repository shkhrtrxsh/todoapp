require("dotenv").config();
const express= require("express");
const app= express();
const userRoutes= require("./routes/userRoutes");
const connectToDB = require("./config/db");
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//connect to database
connectToDB();

app.use("/", userRoutes);



module.exports = app;