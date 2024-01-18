const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calculatedArray = (array) => {
  
    const calculationResult = array.map((element, index) => {
    if (index % 2 === 0) {
      return element * 2;
    } else {
      return element * 3;
    }
  });
  
  return calculationResult
};

console.log(calculatedArray(originalArray));
