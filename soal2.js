function groupByDepartment(employees) { 
  const groupedByDept = {}; 

  employees.forEach(employee => {
    const department = employee.department;
    const employeeName = employee.name;

    if (groupedByDept[department]) {
        groupedByDept[department].push(employeeName);
    } else {
      groupedByDept[department] = [employeeName];
    }
  });

  return groupedByDept;
}


const employees = [
  { name: 'Alice', age: 28, department: 'HR' },
  { name: 'Bob', age: 34, department: 'Engineering' },
  { name: 'Charlie', age: 25, department: 'Engineering' },
  { name: 'David', age: 42, department: 'HR' },
  { name: 'Eve', age: 22, department: 'Marketing' }
];

const groupedEmployees = groupByDepartment(employees);
console.log(groupedEmployees);

