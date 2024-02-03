import { useState } from "react";

// コンポーネント
const Sample = () => {
  //　JSを書ける場所
  const test = "test1";
  //  state変数　state = 状態
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const addNumber = (num1, num2) => {
    return num1 + num2;
  };

  // 必ずreturn
  // returnするのはHTML要素
  // {}の中にもJSを書ける
  return (
    <>
      <h1 style={{ color: "red", fontSize: "40px" }}>{test}</h1>
      <p>input</p>
      <p>value1</p>
      <input onChange={(e) => setValue1(e.target.value)} />
      <p>value2</p>
      <input onChange={(e) => setValue2(e.target.value)} />
      <p>output</p>
      <p>value1の値は、{value1}</p>
      <p>value2の値は、{value2}</p>
      <p>合計は、{addNumber(Number(value1), Number(value2))}</p>
    </>
  );
};

const ZipToAddress = () => {
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");

  const searchAddress = (zip) => {
    const apiUrl = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zip;
    fetch(apiUrl)
      .then((response) => {
        if (response.status !== 200) {
          alert(`HTTPエラー! ステータス: ${response.status}`);
        }
        return response.json();
      })
      .then((body) => {
        setAddress(
          body.results[0].address1 +
            body.results[0].address2 +
            body.results[0].address3
        );
      })
      .catch((error) => {
        alert("エラーが発生しました:", error);
      });
  };

  return (
    <>
      <h1>住所検索</h1>
      <p>郵便番号</p>
      <input
        onChange={(e) => {
          setZip(e.target.value);
        }}
      />
      <button onClick={(e) => searchAddress(zip)}>住所検索</button>
      <p>住所：{address}</p>
    </>
  );
};

const ArrayComponent = () => {
  const [ary, setAry] = useState([23, 33]);

  return (
    <>
      <p>配列の要素数：{ary.length}</p>
      <p>現在の配列の要素：{ary.join(", ")}</p>
      <input
        onChange={(e) => {
          setAry([...ary, e.target.value]);
        }}
      />
    </>
  );
};

const MakeTodoList = () => {
  //TODO タスクの更新
  //TODO タスクの削除
  //jsゾーン
  // Todoが入るリスト
  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState(""); // 追加: 期限のステート
  const [todo, setTodo] = useState([
    { task: "タスク名1", isCompleted: false, date: "2/14" },
    { task: "タスク名2", isCompleted: true, date: "2/15" },
  ]);

  return (
    <>
      <p>☆ToDoリスト☆</p>
      <div style={{ display: "flex" }}>
        {/* <form
        onSubmit=
        {(event) => {
          event.preventDefault(); // デフォルトだとeventを受け取るとリロードされるがページ遷移を防ぐ
          if (task === "") return; //空文字の場合は何もしない
          setTodo((todo) => [
            ...todo,
            { task, isCompleted: false, date: dueDate },
          ]); //配列の最後に追加
          setTask("");
        }}
        > */}
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
          // type="submit"
          onClick={(event) => {
            event.preventDefault(); // デフォルトだとeventを受け取るとリロードされるがページ遷移を防ぐ
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
        {/* </form> */}
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
                      onClick={(event) => {
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
    </>
  );
};

const NotLogin = () => {
  return <p>ログインしてください。</p>;
};

const Main = () => {
  // const isLogin = true;

  // if (isLogin) {
  // }

  // // and
  // if (3 + 3 === 6 && isLogin) {
  // }

  // // or
  // if (3 + 3 === 6 || isLogin) {
  // }

  return (
    <>
      {/* <Sample /> */}
      {/* <ZipToAddress /> */}
      {/* <ArrayComponent /> */}
      {/* {isLogin ? <MakeTodoList /> : <NotLogin />} */}
      {/* {isLogin && <MakeTodoList />} */}
      <MakeTodoList />
    </>
  );
};

export default Main;
