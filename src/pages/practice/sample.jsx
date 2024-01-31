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

const Main = () => {
  return (
    <>
      {/* <Sample /> */}
      {/* <ZipToAddress /> */}
      <ArrayComponent />
    </>
  );
};

export default Main;
