const persons = [
     { name: "Alice", age: 30, occupation: "Engineer" },
     { name: "Bob", age: 25, occupation: "Teacher" },
     { name: "Charlie", age: 35, occupation: "Doctor" },
    // ... 他の人物も同様に続く
];
  
  const getYoungEngineers =(person)=>{
     return person.filter(person => person.age <= 30 && person.occupation === "Engineer");
  }


  console.log(getYoungEngineers(persons))