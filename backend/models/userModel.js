const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true
  },
  status: {
    type: String
  }
});

module.exports = mongoose.model('Todo', todoSchema);
