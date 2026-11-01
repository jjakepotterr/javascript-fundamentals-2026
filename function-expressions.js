// Function expression - assign an anonymous function to a variable
const formatEmployeeName = function (firstName, lastName) { // works because functions are values in JavaScript
    return `${firstName} ${lastName}`;
}

console.log(formatEmployeeName("David", "Tucker"));

// Functions are values - assigns one variable's function to another variable
const formatter = formatEmployeeName;

console.log(formatter("Sarah", "Smith"));

// Function as argument - the receiving function calls it with its own values
function printEmployee(firstName, lastName, formatName) { // receives formatName (function) as it's 3rd argument 
    const displayName = formatName(firstName, lastName);

    console.log(displayName);
}

printEmployee("David", "Tucker", formatEmployeeName); // formatEmployeeName 
// is a function passed an argument in this case

// Callback - function passed to filter() and called for each item
const employees = [
    { firstName: "David", department: "Engineering" },
    { firstName: "Sarah", department: "Product" }
];

const engineeringEmployees = employees.filter(function (employee) {
    return employee.department === "Engineering";
});

console.log(engineeringEmployees);

// Function declartion form
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Function expressions are NOT hoisted - this would throw if placed before the expression:
// console.log(getFullNameExpression("David", "Tucker"));

// Function expression form - same behavior, assigned to a variable
const getFullNameExpression = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
};