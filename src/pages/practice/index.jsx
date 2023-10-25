import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(3);

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
      <Sub />
      <Sub />
    </div>
  );
};

export default Home;

const Sub = () => {
  return <div>Sub</div>;
}