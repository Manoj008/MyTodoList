import React from "react";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: parseInt(Math.random() * 100) }
      ]);
    }
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo"
      />
      <button onClick={submitHandler} className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select to">
        <select onChange={statusHandler} name="todo" className="filter-todo">
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
