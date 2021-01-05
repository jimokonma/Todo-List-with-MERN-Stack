import React from "react";

const TodoItem = (props) => {
  const getStyle = () => {
    return {
      textDecoration: props.completed ? "line-through" : "none",
      color: props.completed ? "gray" : "black",
    };
  };

  return (
    <div className="todo">
      <input type="checkbox" onChange={() => props.markComplete(props.id)} />{" "}
      <p style={getStyle()}>{props.title}</p>
      <input
        className="deleteBtn"
        onClick={() => props.delTodo(props.id)}
        value="x"
        type="submit"
      />
    </div>
  );
};

export default TodoItem;
