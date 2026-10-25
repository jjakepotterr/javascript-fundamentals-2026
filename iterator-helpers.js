const departments = ["Engineering", "Product", "Marketing"];

for (const department of departments) {
    console.log(department);
}

// Iterator - ask
const iterator = departments[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Iterator.from() - wrap an iterable so iterator helper methods become available
const departmentIterator = Iterator.from(departments);

console.log(departmentIterator.next()); 
// Iterators become useful when we want lazy processing.

// Employee data used by every iterator helper example below
const employees = [
    { firstName: "David", department: "Engineering", years: 7},
    { firstName: "Sarah", department: "Product", years: 3},
    { firstName: "Mina", department: "Engineering", years: 11},
    { firstName: "Andre", department: "Marketing", years: 2},
]

// Iterator Helper pipeline - filter, map, then collect into an array
const names = Iterator.from(employees)
    .filter((employee) => employee.department === "Engineering")
    .map((employee) => employee.firstName)
    .toArray();

console.log(names);

// take() - keep the first N values produced by the iterator
const firstTwoNames = Iterator.from(employees)
    .map((employee) => employee.firstName)
    .take(2)
    .toArray();

    console.log(firstTwoNames);

// drop() - skip the first N values, keep the rest
const afterFirstEmployee = Iterator.from(employees)
    .map((employee) => employee.firstName)
    .drop(1)
    .toArray();

console.log(afterFirstEmployee);

// reduce() - combine the values produced by the iterator into on total
const totalYears = Iterator.from(employees)
    .map((employee) => employee.years)
    .reduce((total, years) => total + years, 0);

console.log(totalYears);

// some() - true when at least one value matches
const hasMarketing = Iterator.from(employees)
    .some((employee) => Boolean(employee.department));

console.log(hasMarketing);

// every() - true only when every value matches
const allHaveDepartments = Iterator.from(employees)
    .every((employee) => Boolean(employee.department));

console.log(allHaveDepartments);

// find() - return the first matching value, or undefined
const LongTermEmployee = Iterator.from(employees)
    .find((employee) => employee.years >= 10);

console.log(LongTermEmployee)

// You might notice that array already has methods like map, reduce, find, filter, some etc.
// so what is the difference? Array methods work for arrays and usually create arrays when transforming data.
// Iterator helpers work on Iterators and support lazy pipelines. for small arrays
// Array methods are completely normal, but for large data sequences, generated values,
// streaming like flows, or cases where you only need part of the result. Iterator helpers
// can be useful. Note: this is a more modern Javascript like style and you may need to check if it is supported.