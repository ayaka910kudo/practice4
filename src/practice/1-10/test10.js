const fruits = [
  { id: 1, name: "Apple", color: "Red", taste: "Sweet" },
  { id: 2, name: "Banana", color: "Yellow", taste: "Sweet" },
  { id: 3, name: "Grapes", color: "Purple", taste: "Sweet" },
  { id: 4, name: "Orange", color: "Orange", taste: "Citrusy" },
  { id: 5, name: "Kiwi", color: "Brown", taste: "Tart" },
];

const addFruit = (name, color, taste) => {
  fruits.push({
    id: fruits.length + 1,
    name: name,
    color: color,
    taste: taste,
  });
};

addFruit("aaa", "white", "spicy");

const deleteFruit = (id) => {
  fruits.forEach((fruit, index) => {
    if (fruit.id === id) {
      delete fruits[index];
    }
  });
};

deleteFruit(2);

const updateFruit = (id, newName, newColor, newTaste) => {
  fruits.forEach((fruit, index) => {
    if (fruit.id === id) {
      fruits[index] = {
        id: id,
        name: newName,
        color: newColor,
        taste: newTaste,
      };
    }
  });
};
updateFruit(5, "yellowKiwi", "yellow", "Sweet");

console.log(fruits);
