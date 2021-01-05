import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodos from "./AddTodos";
import axios from "axios";

const Todo = () => {
  // States
  const [todos, setTodos] = useState({ todoList: [] });
  const [complete, setComplete] = useState({ completed: false });

  // Get todos on mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/todos")
      .then((res) => {
        setTodos({ todoList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [todos]);

  // Toggle complete
  const markComplete = (id) => {
    setComplete(!complete);
    const com = {
      completed: complete,
    };
    axios
      .patch("http://localhost:5000/todos/completed/" + id, com)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(com);
  };

  //   Add Todo
  const addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false,
    };
    axios
      .post("http://localhost:5000/todos", newTodo)
      .then((res) => {
        setTodos({
          todoList: [...todos.todoList, newTodo],
        });
        title = "";
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Delete Todos
  const handleDel = (id) => {
    axios
      .delete("http://localhost:5000/todos/" + id)
      .then((res) => {
        setTodos({ todoList: todos.todoList.filter((todo) => todo.id !== id) });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Map todoList
  const todoList = todos.todoList.map((todo) => {
    return (
      <TodoItem
        key={todo._id}
        id={todo._id}
        title={todo.title}
        completed={todo.completed}
        markComplete={markComplete}
        delTodo={handleDel}
      />
    );
  });
  return (
    <div className="todos">
      <h1 className="header">Todo</h1>
      <AddTodos addTodo={addTodo} />
      {todoList.length > 0 ? (
        todoList
      ) : (
        <div className="welcome">
          <h3> DOT TODO</h3>
          <p>- Enter text in "Textarea"</p>
          <p>- Click on '+' To add new todo</p>
          <p>- Click checkbox to mark todo as completed</p>
          <p>- Click on "x" to delete todo</p>
        </div>
      )}
    </div>
  );
};
export default Todo;
