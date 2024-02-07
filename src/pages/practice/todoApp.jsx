import { useState } from "react";

// 上から順に実施してください。

// TODO ソート機能を追加してください。ソート項目は期限で昇順、降順で並び替えられるようにしてください。
// TODO 編集モーダルを開いた際の初期値に何も入力がないので、編集したいToDoのタスク名と期限がデフォルトで表示されるように修正してください。
// TODO 期限を入力しないでタスクを追加・編集すると期限にInvalid Dateと表示されるので、タスク名・期限が両方入力されているときだけ追加・編集できるようにしてください。

//taskIndexは編集したいタスクの番号
const Modal = ({ isOpen, onClose, taskIndex, todo, setTodo }) => {
  const [editTask, setEditTask] = useState("");
  const [editDate, setEditDate] = useState("");
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
          <input
            type="date"
            value={editDate}
            onChange={(event) => setEditDate(event.target.value)}
          />
          <button
            onClick={() => {
              if (editTask === "") return;
              const editCopyTodo = [...todo];

              editCopyTodo[taskIndex] = {
                task: editTask,
                date: editDate,
                // とりあえず現在の値をそのまま入れておく
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

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("ja-JP", options);
  };

  return (
    <>
      <h1>☆ToDoリスト☆</h1>
      <p>新規タスク追加</p>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="タスクを入力してね"
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

      <h2>全てのタスク</h2>

      <table>
        <thead>
          <tr>
            <td>No.</td>
            <td>タスク名</td>
            <td>期限</td>
            <td>編集</td>
            <td>削除</td>
          </tr>
        </thead>
        <tbody>
          {todo.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}.</td>
              <td>{item.task}</td>
              <td>{formatDate(item.date)}</td>
              <td>
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setIsModalOpen(true);
                  }}
                >
                  編集
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    const copyDelateTodo = [...todo];
                    copyDelateTodo.splice(index, 1);
                    setTodo(copyDelateTodo);
                  }}
                >
                  削除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: "flex" }}>
        <div style={{ margin: "5px" }}>
          <h2>未着手</h2>
          <table>
            <thead>
              <tr>
                <td>タスク名</td>
                <td>期限</td>
                <td>ボタン</td>
              </tr>
            </thead>
            <tbody>
              {todo.map((item, index) => {
                // isCompleted が false の場合のみ表示
                return (
                  !item.isCompleted && (
                    <tr key={index}>
                      <td>{item.task}</td>
                      <td>{formatDate(item.date)}</td>
                      <td>
                        <button
                          onClick={() => {
                            const copyTodo = [...todo];
                            copyTodo[index].isCompleted = true;
                            setTodo(copyTodo);
                          }}
                        >
                          終わった！
                        </button>
                      </td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={{ margin: "5px" }}>
          <h2>完了</h2>
          <table>
            <thead>
              <tr>
                <td>タスク名</td>
                <td>期限</td>
                <td>ボタン</td>
              </tr>
            </thead>
            <tbody>
              {todo.map((item, index) => {
                //  isCompleted が true の場合のみ表示
                return (
                  item.isCompleted && (
                    <tr>
                      <td>{item.task}</td>
                      <td>{formatDate(item.date)}</td>
                      <td>
                        <button
                          onClick={() => {
                            const copyTodo = [...todo];
                            copyTodo[index].isCompleted = false;
                            setTodo(copyTodo);
                          }}
                        >
                          まだ終わってなかった！
                        </button>
                      </td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
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
