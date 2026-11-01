// Logic AND (&&) - both sides must be true
const employee = {
    department: "Engineering",
    numberOfEmployed: 7,
    isActive: true
};

const shouldInvite = employee.department === "Engineering" && employee.numberOfEmployed >= 5;

console.log(shouldInvite);

// Logical OR (||) - at least one side must be true
const shouldInviteLeadership = employee.department === "Executive" || employee.numberOfEmployed >= 5;

console.log(shouldInviteLeadership);

// Logical NOT (!) - inverts a boolean
const isInactive = !employee.isActive;

console.log(isInactive);

// Common falsy values: false, 0, "", null, undefined, NaN, 0n
// Boolean() of falsy values - every line logs false
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Boolean() of truthy values - note that "false", {}, and [] are all truthy
console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean({}));
console.log(Boolean([]));

// Common beginner mistake: the string "false" is truthy
const userInput = "false";

if (userInput) {
    console.log("User input is truthy.");
}

// Falsy default with || - replaces 0 with the fallback
const vacationDays = 0

const displayValue = vacationDays || "Unknown";

console.log(displayValue);

// Nullish default with ?? - preserves 0, only replaces null/undefined
const betterDisplayValue = vacationDays ?? "Unknown";

console.log(betterDisplayValue);

