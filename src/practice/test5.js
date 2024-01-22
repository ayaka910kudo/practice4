// 偶数だけを抽出する関数
const extractEvenNumbers = (numbers) => {
  // ここにコードを追加
  return numbers.filter((number) => number % 2 === 0);
}

// テスト
const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = extractEvenNumbers(originalNumbers);
console.log(evenNumbers);
// 出力例: [2, 4, 6, 8, 10]
