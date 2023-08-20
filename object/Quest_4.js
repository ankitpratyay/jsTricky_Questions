/* declare array of employees & increase sal of every employee by 500 */

let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 5000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"},
    {name: 'Mohan', salary: 4000, hireDate: "December 12, 2011"}
];
employees.forEach((ele)=>(ele.salary+=500))
console.log(employees)