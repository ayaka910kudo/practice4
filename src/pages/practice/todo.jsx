//未完了と完了のタスクを分けて表示する

import { useState } from "react";

const TodoList = () => {
  //ToDoが入っているリスト
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

  //ToDoはリストに入ったもの
  const [todos, setTodos] = useState(initTodos);
  //Taskは入力された文字
  const [task, setTask] = useState("");

  //入力された文字をTaskとする
  const handleNewTask = (event) => {
    console.log(event);
    setTask(event.target.value);
  };

  //ボタンが押されたら、ToDoの最後にTaskに入っていた文字を追加してTaskを空に戻す
  const handleSubmit = (event) => {
    event.preventDefault(); // デフォルトだとeventを受け取るとリロードされるがページ遷移を防ぐ
    if (task === "") return; //空文字の場合は何もしない
    setTodos((todos) => [...todos, { task, isCompleted: false }]); //配列の最後に追加
    setTask("");
  };

  const handleRemoveTask = (index) => {
    const newTodos = [...todos]; //新しい配列をnewTodosにコピー
    newTodos.splice(index, 1); //index番目から1つ削除
    setTodos(newTodos); //新しい配列をtodosにセット
  };

  const handleUpdateTask = (index) => {
    let newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>ToDo List</h1>

      <form onSubmit={handleSubmit}>
        Add Task :
        <input
          value={task}
          placeholder="Add New Task"
          //入力された文字をhandleNewTaskで処理
          onChange={handleNewTask}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index} //繰り返しのものに必要
            style={
              todo.isCompleted === true
                ? { textDecorationLine: "line-through" }
                : {}
            }
          >
            {todo.task} <span onClick={() => handleUpdateTask(index)}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
