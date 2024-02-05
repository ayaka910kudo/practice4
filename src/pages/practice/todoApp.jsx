import { useState } from "react";

//isOpenがTrueなら表示する
//onCloseでisModalOpenをfalseにする
// const Modal = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {isOpen && (
//         <div style={{ backgroundColor: "red", zIndex: 10 }}>
//           <p>タスク編集</p>
//           <input />
//           <input />
//           <button onClick={onClose}>閉じる</button>
//         </div>
//       )}
//     </>
//   );
// };

//taskIndexは編集したいタスクの番号

const Modal = ({ isOpen, onClose, taskIndex, todo, setTodo }) => {
  const [editTask, setEditTask] = useState("");

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* モーダルの内容 */}
        <p>編集したい内容を入力してね</p>
        <div>
          <input
            type="text"
            placeholder="ここに入力"
            onChange={(event) => {
              console.log(event);
              setEditTask(event.target.value);
            }}
          />
          <button
            onClick={() => {
              if (editTask === "") return; //空文字の場合は何もしない
              const editCopyTodo = [...todo];

              editCopyTodo[taskIndex] = {
                task: editTask,
                // とりあえず現在の値をそのまま入れておく
                date: editCopyTodo[taskIndex].date,
                isCompleted: editCopyTodo[taskIndex].isCompleted,
              };
              setTodo(editCopyTodo);
              setEditTask("");
              onClose();
            }}
          >
            更新
          </button>
        </div>
        <button onClick={onClose}>キャンセル</button>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* モーダルの背景色と透明度を設定 */
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

const TodoApp = () => {
  //jsゾーン
  // Todoが入るリスト
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState(""); // 追加: 期限のステート
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  const [todo, setTodo] = useState([
    { task: "タスク名1", isCompleted: false, date: "2/14" },
    { task: "タスク名2", isCompleted: true, date: "2/15" },
  ]);

  return (
    <>
      <p>☆ToDoリスト☆</p>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="タスクを入力してね"
          style={{ color: "#99f703" }}
          onChange={(event) => {
            console.log(event);
            setTask(event.target.value);
          }}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
        <button
          onClick={() => {
            if (task === "") return; //空文字の場合は何もしない
            setTodo((todo) => [
              ...todo,
              { task, isCompleted: false, date: dueDate },
            ]); //配列の最後に追加
            setTask("");
          }}
        >
          追加
        </button>
      </div>

      <h1>全てのタスク</h1>
      <ul>
        {todo.map((item, index) => (
          <li
            key={index} //繰り返しのものに必要
          >
            {/* {item.task + " " + item.isCompleted + item.date} */}
            {`${item.task}
           ${item.isCompleted} ${item.date}`}
            <button
              onClick={() => {
                setEditIndex(index);
                setIsModalOpen(true);
              }}
            >
              編集
            </button>
            <button
              onClick={() => {
                const copyDelateTodo = [...todo];
                copyDelateTodo.splice(index, 1);
                setTodo(copyDelateTodo);
              }}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "5px" }}>
          <h2>未着手</h2>
          {/* ここにstatusが未完了のタスクを表示 */}
          <ul>
            {todo.map(
              (item, index) =>
                // isCompleted が false の場合のみ表示
                !item.isCompleted && (
                  <div>
                    <li key={index}>
                      {`${item.task} ${item.isCompleted} ${item.date}`}
                    </li>
                    <button
                      onClick={(event) => {
                        const copyTodo = [...todo];
                        copyTodo[index].isCompleted = true;
                        setTodo(copyTodo);
                      }}
                    >
                      終わった！
                    </button>
                  </div>
                )
            )}
          </ul>
        </div>
        <div style={{ margin: "5px" }}>
          <h2>完了</h2>
          <ul>
            {todo.map(
              (item, index) =>
                // isCompleted が true の場合のみ表示
                item.isCompleted && (
                  <li key={index}>
                    {`${item.task} ${item.isCompleted} ${item.date}`}
                    <button
                      onClick={() => {
                        const copyTodo = [...todo];
                        copyTodo[index].isCompleted = false;
                        setTodo(copyTodo);
                      }}
                    >
                      まだ終わってなかった！
                    </button>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>

      {/* Todo編集モーダル */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        taskIndex={editIndex}
        todo={todo}
        setTodo={setTodo}
      />
    </>
  );
};

export default TodoApp;
