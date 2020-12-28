import React from "react";

const Todo = ({ todos, setTodos, key, todo }) => {
  function onDeleteHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  const onCompleteHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      {todo.completed ? (
        <li className="todo-item completed">{todo.text}</li>
      ) : (
        <li className="todo-item">{todo.text}</li>
      )}

      <button onClick={onCompleteHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={onDeleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
