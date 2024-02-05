import { useState } from "react";

// 上から順に実施してください。
// TODO isCompletedの値が表示されているので削除してください。
// TODO タスク作成の入力項目の色が気持ち悪いのでスタイルを削除してください。
// TODO ToDo編集モーダルで期限が編集できないので、編集できるようにしてください。
// TODO タスク名、期限、編集ボタン、削除ボタンが1行で表示されており、UIとして良くないのでテーブルで表示してください。
// TODO ソート機能を追加してください。ソート項目は期限で昇順、降順で並び替えられるようにしてください。
// TODO 編集モーダルを開いた際の初期値に何も入力がないので、編集したいToDoのタスク名と期限がデフォルトで表示されるように修正してください。

//taskIndexは編集したいタスクの番号
const Modal = ({ isOpen, onClose, taskIndex, todo, setTodo }) => {
  const [editTask, setEditTask] = useState("");

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
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
              if (editTask === "") return;
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
  const [task, setTask] = useState(""); // Todoが入るリスト
  const [dueDate, setDueDate] = useState(""); // 期限のステート
  const [isModalOpen, setIsModalOpen] = useState(false); //モーダル表示非表示
  const [editIndex, setEditIndex] = useState(""); //編集したいタスクの番号

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
            if (task === "") return;
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
