// Basic assignment
let department = "Engineering";
let numberOfEmployees = 12;
let isActive = true;

// Addition assignment (equivalent to numberOfEmployees = numberOfEmployees + 3)
numberOfEmployees += 3;

console.log(numberOfEmployees); // 15

// Subtraction assignment (equivalent to remainingSeats = remainingSeats - 2)
let remainingSeats  = 10;

remainingSeats -= 2;

// Multiplication assignment 
let weeklyHours = 40;

weeklyHours *= 4;

console.log(weeklyHours); // 160

// Division assignment
let anualBudget = 120000;

anualBudget /= 12;

console.log(anualBudget); // 10000

// Remainder assignment
let totalItems = 21;

totalItems %= 8;

console.log(totalItems); // 5

// Exponentiation assignment (Equivalent to power = power ** 3)
let power = 2;

power **= 3;

console.log(power); // 8

// Logical OR assignment (||=) - assigns when current value is falsy
let displayName =  "";

displayName ||= "Anonymous"; // if left is falsy then return thing on right. displayName or anonymous if name does not exists

console.log(displayName); // Anonymous

// Nullish assignment (??=) - keeps 0 because 0 is not nullish
let vacationDays = 0;

vacationDays ??= 10; // if ||= it would be 10 because 0 is falsey but it is not nulish

console.log(vacationDays); // 0

// Nullish assignment (??=) - undefined gets the fallback
let manager; // assign no value to variable

manager ??= "No manager assigned"; 

console.log(manager); // No manager assigned

// Logical AND assignment (&&=) - assigns only when current value is truthy
let employee = {
    firstName: "David",
    isActive: true
}

employee.isActive &&= false; // assigns right value if left value is true

console.log(employee.isActive); // false

// Sometimes shorthand is clearer 
let counter = 0;

counter += 1; // counter = counter + 1

console.log(counter); // 1

// Sometimes the explicit form is clearer than ??=
let supervisor;

if (supervisor === undefined) {
    supervisor = "No supervisor assigned";
}

console.log(supervisor); // No supervisor assigned

// figure out what is clearer in your code and use that so others may understand it more easily.