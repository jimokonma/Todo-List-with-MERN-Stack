import React, { useState } from "react";

const AddTodos = (props) => {
  const [todoInput, setTodoInput] = useState("");
  const handleAddTodo = (e) => {
    setTodoInput(e.target.value);
  };
  // Submit Todo
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todoInput);
    setTodoInput("");
    e.target.value = " ";
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        placeholder="Add Todo ..."
        value={todoInput}
        style={{ flex: "10", padding: "5px" }}
        onChange={handleAddTodo}
        required
        checked
      />
      <button>+</button>
    </form>
  );
};
export default AddTodos;
