/* declare an array of employees & sort them in ascending order by name.
 */

const employee = [
  { empId: "105", name: "ankit" },
  { empId: "120", name: "sachin" },
  { empId: "103", name: "sudhir" },
  { empId: "111", name: "pankaj" },
  { empId: "41", name: "dheeraj" },
];
employee.sort((a,b)=>(a.name>b.name?1:-1))
console.log(employee)