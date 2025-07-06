function validateStudentsData(students) {
  for (let student of students) {
    if (typeof student.name !== 'string' || student.name.trim() === '') {
      return false; 
    }

    if (typeof student.age !== 'number' || student.age <= 0) {
      return false; 
    }

    if (typeof student.score !== 'number' || student.score < 0 || student.score > 100) {
      return false;
    }
  }

  return true;
}


const students = [
  { name: "Andi", age: 20, score: 85 },
  { name: "Budi", age: -5, score: 90 }, 
  { name: "", age: 22, score: 75 }, 
  { name: "Citra", age: 19, score: 110 }
];

console.log(validateStudentsData(students));

const validStudents = [
  { name: "Dewi", age: 21, score: 90 },
  { name: "Fajar", age: 18, score: 78 },
];
console.log(validateStudentsData(validStudents));