import { useState } from "react";

const TodoList = () => {
  const initTodos = [
    {
      task: "Learn vue.js",
      isCompleted: false,
    },
    {
      task: "Learn React Hook",
      isCompleted: false,
    },
    {
      task: "Learn Gatsby.js",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initTodos);

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
