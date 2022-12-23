const express = require("express");
const {home, getTodos, createTodo, deleteTodo} = require("../controllers/userController")
const router = express.Router();

router.get("/",home);
router.get("/getTodos",getTodos);
router.post("/createTodo",createTodo);
router.delete("/deleteTodo/:id",deleteTodo);
module.exports = router;