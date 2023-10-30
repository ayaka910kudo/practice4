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
  const [task, setTask] = useState("");
  const handleNewTask = (event) => {
    console.log(event);
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // デフォルトだとeventを受け取るとリロードされるがページ遷移を防ぐ
    if (task === "") return; //空文字の場合は何もしない
    setTodos((todos) => [...todos, { task, isCompleted: false }]); //配列の最後に追加
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos]; //新しい配列をnewTodosにコピー
    newTodos.splice(index, 1);//index番目から1つ削除
    setTodos(newTodos);//新しい配列をtodosにセット
  };


  return (
    <div>
      <h1>ToDo List</h1>

      <form onSubmit={handleSubmit}>
        Add Task :
        <input
          value={task}
          placeholder="Add New Task"
          onChange={handleNewTask}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task} <span onClick={() => handleRemoveTask(index)}>X</span></li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
