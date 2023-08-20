/* Ques:
let arr=[“bhavya syal”, “ankita sharma”]
Output should be:
BhavyaSyal
AnkitaSharma
 */

let arr = ["bhavya syal", "ankita sharma"];
arr.forEach((val) => {
  val = val.split(" ");
  console.log(val);
  for (let i = 0; i < val.length; i++) {
    let value = val[i];
    value = value.split("");
    value[0] = value[0].toUpperCase();
    value = value.join("");
    val[i] = value;
  }
  console.log(val.join(" "));
});
