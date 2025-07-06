function countEmployeesByAgeRange(employees) {
  let result = {
    "Under 25": 0,
    "25-30": 0,
    "Above 30": 0
  };

  employees.forEach(employee => {

    const age = employee.age; 

    if (age < 25) {
      result["Under 25"]++;
    } else if (age >= 25 && age <= 30) {
      result["25-30"]++;
    } else { 
      result["Above 30"]++;
    }
  });

  return result;
}

const employees = [
  { name: "Alice", age: 23 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 27 },
  { name: "David", age: 35 },
  { name: "Eve", age: 24 }
];

console.log(countEmployeesByAgeRange(employees));
