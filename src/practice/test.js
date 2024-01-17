const strings = ["あたま", "かた", "ひざ", "つまさき"];
const concatenateStrings = (strings) => {
  const mergedString = strings.join("");
  return mergedString;
};

console.log(concatenateStrings(strings));

const originalArray = [42, 17, 89, 23, 56, 74, 5, 31, 98, 12];

const reverseArray = (array) => {
  const copyArray = array.slice();
  console.log(copyArray);
  return copyArray.reverse();
};

console.log(reverseArray(originalArray));
console.log(reverseArray(strings));
