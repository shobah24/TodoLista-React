import React from "react";

function TodoItem({ todo, HandleToggleTodo, HandleRemoveTodo }) {
  return (
    //skapar task/to-do
    <li className={todo.completed ? "completed" : ""}>
      <input
        className="checkbox-container"
        type="checkbox"
        checked={todo.completed}
        onChange={() => HandleToggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => HandleRemoveTodo(todo.id)}>🗑Ta bort</button>
    </li>
  );
}

export default TodoItem;
