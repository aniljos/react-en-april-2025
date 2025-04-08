import Employee, { version} from './employee.js'

console.log("Hello Typescript...");


var x = 10; // Type inference
//x = " ";// static type checking

var y: number; // Type annotation
y = 100;

var obj: {id: number, name?: string | null};

obj = { id: 1, name: "Anil"};

type User = {
    id: number;
    name: string;
    email?: string
}

type windowState = "open" | "closed";
type NumberString = string | number;

const user: User = {
    id: 1, name: "Anil", email: "anil@abc.com"
}
console.log("user", user);

const currentState: windowState="open";
console.log("window state", currentState);

const emp = new Employee(1, "Anil", 300);
console.log("emp", emp);








