/* declare array of employees & sort them in ascending order (empId)
 */

const employee = [
  { empId: "105", name: "number1" },
  { empId: "120", name: "number2" },
  { empId: "103", name: "number3" },
  { empId: "111", name: "number4" },
  { empId: "41", name: "number4" },
];
employee.sort((a,b)=>(a.empId-+b.empId));
console.log(employee)