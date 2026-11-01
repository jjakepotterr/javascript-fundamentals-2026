// Function expresion - the form we're about to convert to an arrow function
const formatEmployeeName = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
};

// Arrow function - `=>` syntax with curly-brace body and explicit return
const formatEmployeeNameArrow = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
};
 
console.log(formatEmployeeNameArrow("David", "Tucker"));

// Explicit return with a multi-line arrow function body
const getBadgeColor = (yearsOfService) => { // in explicit must use curly-braces
    if (yearsOfService <5) {
        return "blue"; // in multi-arrow, must use "return" keyword if we want to return a value
    }

    if (yearsOfService < 10) {
        return "yellow";
    }

    return "silver";
};

console.log(getBadgeColor(7));

// Implicit return - expression after `=>` is returned automatically
const formatEmployeeNameShort = (firstName, lastName) => `${firstName} ${lastName}`; //This expression has no curly-brace and no return keyword. However, the expression after the arrow is returned automatically

console.log(formatEmployeeNameShort("Sarah", "Smith")); 

// Multiple parameters - parenteses required
const add = (a, b) => a + b;

// No Parameters - empty parentheses required
const getDefaultDepartment = () => "Engineering";

// Single parameters - empty parentheses required
const isActive = employee => employee.isActive;

// Single parameter with parentheses - preferred for consistenc
const isActiveEmployee = (employee) => employee.isActive;

// Arrow function as filter() callback - concise inline form
const employees = [
    { firstName: "David", department: "Engineering", isActive: true },
    { firstName: "Sarah", department: "Product", isActive: false },
    { firstName: "Mina", department: "Engineering", isActive: true }
];

const activeEmployees = employees.filter((employee) => employee.isActive);

console.log(activeEmployees);

// Arrow function as map() callback - transform each item
const names = employees.map((employee) => employee.firstName);

console.log(names);
