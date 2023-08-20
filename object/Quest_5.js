/* declare array of employees & add "comp:ibm" to every employee;
 */

let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 5000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"},
    {name: 'Mohan', salary: 4000, hireDate: "December 12, 2011"}
];
employees.forEach((ele)=>(ele.comp='ibm'));
console.log(employees)