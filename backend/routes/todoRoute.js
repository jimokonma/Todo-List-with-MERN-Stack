const router = require("express").Router();
const TodoModel = require("../models/todoModel");

// Get All Todo
router.get("/", (req, res) => {
  TodoModel.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Single Todo
router.get("/:todoId", (req, res) => {
  TodoModel.findById({ _id: req.params.todoId })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Post Todo
router.post("/", (req, res) => {
  const addTodo = new TodoModel({
    title: req.body.title,
  });
  addTodo
    .save()
    .then((data) => {
      res.json(`todo added "${data.title}"`);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Edit Todo
router.patch("/:todoId", (req, res) => {
  TodoModel.updateOne(
    { _id: req.params.todoId },
    { $set: { title: req.body.title } }
  )
    .then(() => {
      res.json("Update Saved");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Mark Completed
router.patch("/completed/:todoId", (req, res) => {
  TodoModel.updateOne(
    { _id: req.params.todoId },
    { $set: { completed: req.body.completed } }
  )
    .then(() => {
      res.send(req.body.completed);
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});

// Delete Todo
router.delete("/:todoId", (req, res) => {
  TodoModel.deleteOne({ _id: req.params.todoId })
    .then(() => {
      res.json("Deleted successfully");
    })
    .catch((err) => {
      res.status(400).json("Error: " + err);
    });
});
module.exports = router;
