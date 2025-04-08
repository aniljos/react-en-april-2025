import Employee from './employee.js';
console.log("Hello Typescript...");
var x = 10; // Type inference
//x = " ";// static type checking
var y; // Type annotation
y = 100;
var obj;
obj = { id: 1, name: "Anil" };
const user = {
    id: 1, name: "Anil", email: "anil@abc.com"
};
console.log("user", user);
const currentState = "open";
console.log("window state", currentState);
const emp = new Employee(1, "Anil", 300);
console.log("emp", emp);
