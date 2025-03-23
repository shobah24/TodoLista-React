import React, { useState } from "react";

function TodoInput({ HandleAddTodo }) {
  const [Input, setInput] = useState("");

  // kollar om något skrivs i input-fältet
  const handleinputChange = (e) => {
    console.log("inputchange körs"); // test
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault(); // Stoppar sidan från add laddas om varje gång vi lägger till en to-do
    if (!Input.trim()) return;
    HandleAddTodo(Input);
    setInput(""); // Tömmer text input efter att en to-do lagts till
  };

  return (
    <form className="input-form" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Lägg till en to-do..."
        className="add-input"
        value={Input}
        onChange={handleinputChange}
      />
      <button type="submit" className="add-button">
        🆕Lägg till
      </button>
    </form>
  );
}

export default TodoInput;
