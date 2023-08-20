/* 18. add Dept info for each employee */
const employees = [
  { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
  { eId: 104, name: "reena", sal: 8000, gender: "female" },
  { eId: 103, name: "reena", sal: 8000, gender: "female" },
  { eId: 102, name: "sanjay", sal: 5000, gender: "male" },
];

const departments = [
  { eId: 101, dept: "sales" },
  { eId: 104, dept: "manager" },
];
employees.map((emp)=>{
  let temp= departments.find((ele)=>(ele.eId===emp.eId))
 if(temp){emp.dept=temp.dept} 
})
console.log(employees)