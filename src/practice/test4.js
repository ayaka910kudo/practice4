const originalStrings = "Hello World";

const reverseStrings = (strings) => {
  //スペースの箇所で区切り、配列にする
  separatedArray = strings.split(" ");
  ///return separatedArray;

  //配列内の要素を一つずつ取り出す
  const mapResult = separatedArray.map((element) => {
    //一文字ずつ区切った配列にする
    // console.log(element.split(""));

    //配列内の要素を逆順にする
    //    console.log(element.split("").reverse());

    //文字列に戻す
    // デバッグ
    // console.log(element.split("").reverse().join(""));
    return element.split("").reverse().join("");
  });

  return mapResult.join(" ");

  // デバッグ
  // console.log(mapResult)
};

// console.log(reverseStrings(originalStrings));
const reverseStringResult = reverseStrings(originalStrings);
console.log(reverseStringResult)

/**
 * 単語の並びを逆順に変更して、各単語のスペルも逆順にする
 * 例: Hello World => dlroW olleH
 */
// console.log(
//   originalStrings
//     .split(" ")
//     .reverse()
//     .map((v) => v.split('').reverse().join(''))
//     .join(' ')
// );
