/* declare array of employees & filter the employees whose sal>6000;
 */
let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 5000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"},
    {name: 'Mohan', salary: 4000, hireDate: "December 12, 2011"}
];
console.log(employees.filter((a)=>(a.salary>6000)))
