const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean },
});

const TodoModel = mongoose.model("TodoModel", todoSchema);

module.exports = TodoModel;
