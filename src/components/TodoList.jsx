import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("Todo")) || []
  );

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(todos));
  }, [todos]);

  const HandleAddTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text, completed: false }]); // skapar to-do genom att kolla på tidigare to-do och nya id,input
    }
  };

  // växlar mellan true och false på completed genom att kolla om id stämmer överens.
  const HandleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const HandleRemoveTodo = (idToRemove) => {
    setTodos(todos.filter((todo) => todo.id !== idToRemove));
  };

  return (
    <div>
      <h1>📝My To-Do List</h1>
      <p></p>
      <TodoInput HandleAddTodo={HandleAddTodo} />
      <div className="todo-container">
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              HandleToggleTodo={HandleToggleTodo}
              HandleRemoveTodo={HandleRemoveTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
