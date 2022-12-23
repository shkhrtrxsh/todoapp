const Todo = require("../models/userModel");

exports.home = (req, res) => {
  res.send("Hello  Alpha ");
};

exports.getTodos= async (req, res) => {
  try {
    const todos = await Todo.find(); // Find all todo items in the database
    res.send({ todos }); // Send the todos array as the response data
  } catch (error) {
    res.status(500).send(error); // If there is an error, send a 500 status code and the error message
  }
};

exports.createTodo= async (req,res) =>{
  const { taskName, status } = req.body;
  const newTodo = new Todo({ taskName, status });
  newTodo.save((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.sendStatus(200);
    }
  });
}
exports.deleteTodo= async (req,res) =>{
  const { id } = req.params;
  Todo.findByIdAndDelete(id, (error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.sendStatus(200);
    }
  });
}