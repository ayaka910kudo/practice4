const { Dela_Gothic_One } = require("next/font/google");

const students = [
  { id: 1, name: "Alice", grade: "A" },
  { id: 2, name: "Bob", grade: "B" },
  { id: 3, name: "Charlie", grade: "C" },
  { id: 4, name: "David", grade: "A" },
  { id: 5, name: "Eve", grade: "B" },
];

// const getStudentById = students.find((student) => student.id === 1);
const getStudentById = (studentId) => {
  return students.find((student) => student.id === studentId);
};

const getStudentsByGrade = (studentGrade) => {
  return students.filter((student) => {
    return student.grade === studentGrade;
  });
};

const addStudent = (newStudent) => {
  students.push(newStudent);
};

const updateGrade = (targetId, newGrade) => {
  students.forEach((student, index) => {
    if (student.id === targetId) {
      students[index].grade = newGrade;
    }
  });
  //idからどの学生か探す
  // const target = students.find((student)=>{student.id === targetId})
  //対象の学生の成績を更新する
  //return target.grade = newGrade
};

const removeStudent = (targetId) => {
  students.forEach((student, index) => {
    if (student.id === targetId) {
      delete students[index];
    }
  });
};

//console.log(getStudentById(3));
//console.log(getStudentsByGrade("A"));
//addStudent({ id: 6, name: "ann", grade: "S" });
//console.log(students);

console.log(updateGrade(2, "SSS"));
console.log(students);
console.log(removeStudent(2));
console.log(students);
