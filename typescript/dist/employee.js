export class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
}
//named export
export const version = "1.0";
//default export
export default Employee;
