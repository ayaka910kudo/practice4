import React, { useState, useEffect } from "react";

const Home = () => {
  // jsゾーン
  const [count, setCount] = useState(null);

  useEffect(() => {
    setCount(100);
  }, []);

  const text = "テキスト";
  console.log(text);

  const addNumber = (num1, num2) => {
    return num1 + num2;
  };
  console.log(addNumber(1, 2));

  // htmlゾーン
  return (
    <div>
      <h1 style={{ color: "red" }}>Home</h1>
      <p>{count}</p>
      <div
        style={{ display: "flex", flexDirection: "column", background: "red" }}
      >
        <button onClick={() => setCount(count + 1)} style={{ color: "red" }}>
          +
        </button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <AddNumber />
      <AddNumber />
    </div>
  );
};

export default Home;

const AddNumber = () => {
  const [number, setNumber] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <>
      <div style={{ display: "flex"}}>
        <input
          type="number"
          onChange={(event) => {
            setNumber1(event.target.value);
          }}
        />
        <p>+</p>
        <input
          type="number"
          onChange={(event) => {
            setNumber2(event.target.value);
          }}
        />
        <p>=</p>
        <button
          onClick={() => {
            setNumber(Number(number1) + Number(number2));
          }}
        >
          足し算計算結果
        </button>
        <button
          onClick={() => {
            setNumber(Number(number1) - Number(number2));
          }}
        >
          引き算計算結果
        </button>
        <button
          onClick={() => {
            setNumber(Number(number1) * Number(number2));
          }}
        >
          かけ算計算結果
        </button>
        <button
          onClick={() => {
            setNumber(Number(number1) / Number(number2));
          }}
        >
          わり算計算結果
        </button>
        <p>{number}</p>
      </div>
    </>
  );
};
