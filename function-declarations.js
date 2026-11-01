import { getDefaultAutoSelectFamily } from "node:net";

// Basic function declaration - no parameters, no return value
function sayHello() {
    console.log("Hello, Javascript");
}

sayHello();

// Single parameter - same function reused with different arguments
function greetEmployee(firstName) {
    console.log(`Hello, ${firstName}.`);
}

greetEmployee("David");
greetEmployee("Sarah");

// Multiple parameters with a return value
function formatEmployeeName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const displayName = formatEmployeeName("David", "Tucker");

console.log(displayName);

// Default parameter value - used when the argument is undefined
function greetEmployeeWithDefault(firstName = "there") {
    console.log(`Hello, ${firstName}.`)
}

greetEmployeeWithDefault("David");
greetEmployeeWithDefault();

// Rest parameteer - gathers remaining arguments into an array
function listSkills(employyeName, ...skills) {
    console.log(`${employyeName} has these skills:`);

    for (const skill of skills) {
        console.log(`- ${skill}`)
    }
}

listSkills("David", "JavaScript", "Node.js", "Testing");

// Return value - caller decides what to do with it
function calculateMonthlySalary(annualSalary) {
    return annualSalary / 12;
}

const monthlySalary = claculateMonthlySalary(120000);

console.log(monthlySalary);

// Guard-style returns - first matching condition returns and exits
function getBadgeColor(yearsOfService) {
    if (yearsOfService < 5) {
        return "blue";
    }

    if (yearsOfService < 10) {
        return "yellow";
    }

    return "silver";
}

console.log(getBadgeColor(7));

// Hoisting - function declerations can be called before they appear in the file
console.log(getDepartmentLabel("Engineering"));

function getDepartmentLabel(department) {
    return `Departement: ${department}`;
} // However just because you can hoist,
//  doesn't mean you always should do this. Many teams still prefer to define functions before using them.
// defining functions first makes the files easier to read. Expressions behave different here and thats worth noting.

