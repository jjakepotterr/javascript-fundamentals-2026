class Employee {
    isActive = true; // Public field may be accessed outside of the class
    
    constructor(firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }

    getDisplayName() {
        return `${this.firstName} ${this.lastName}`;
    } 
}

const employee = new Employee("David", "Tucker", "Engineering");

console.log(employee.isActive);

employee.isActive = false; // accused here outside the class

console.log(employee.isActive);

class Employee2 {
    #employeeId; // Private field only works inside the class. Useful when you want to hide implementation and control how values are accessed.

    constructor(employeeId, firstName, lastName) {
        this.#employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getEmployeeId() {
        return this.#employeeId; // accessed here within the class
    }
}

const employee2 = new Employee2("E-1001", "Sarah", "Smith");

console.log(employee2.getEmployeeId());

// console.log(employee.#employeeId); would cause error because # only accessible from within the class

class Employee3 {
    static companyName = "Example Corp"; // a static field belongs to the class itself, not to instance.
    
    static createGuestEmployee(firstName, lastName) { // static method belongs to the class itself, not an individual instance. Useful for utility functions that don't require an instance.
        return new Employee3("GUEST", firstName, lastName);
    }

    constructor(department, firstName, lastName) {
        this.department = department;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

console.log(Employee3.companyName); // Notice that we call Employee3.companyName

const guest = Employee3.createGuestEmployee("Mina", "Lee"); // Notice that we call Employee3.createGuestEmployee directly on the class, not on an instance.
// You will see static methods all over Javascript
console.log(guest);

// we have already seen a couple static built-in methods like:
Object.hasOwn(employee, "firstName");
Number.isSafeInteger(42);
JSON.stringify(employee);
// These are called in the constructor or global object, not on a specific instance of the class itself

class Manager extends Employee3 { // This is Inheritance, it allows one class to extend to another class
    constructor(department, firstName, lastName, teamSize) {
        super(department, firstName, lastName);
        this.teamSize = teamSize;
    }
}