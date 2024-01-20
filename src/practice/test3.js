const originalArray = [10, 7, 25, 4, 6, 13, 8, 3];

const newArray = array =>
  array.map(element => {
    if (element % 2 === 0) {
      return element / 2;
    } else {
      return element * 3;
    }
  });

console.log(newArray(originalArray));
