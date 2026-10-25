// process.argv - full argument array, including node and script paths
console.group(process.argv);

// slice(2) - skip node and script paths, keep only user-provided argumetns
const args = process.argv.slice(2);

console.log(args);

// Destructure positional arguments by index
const [command, firstName, department] = process.argv.slice(2);

console.log(command);
console.log(firstName);
console.log(department);

// Branch on the parsed command
if (command === "add") {
    console.log(`Adding ${firstName} to ${department}.`);
} else {
 
    console.error("Unknown command.");
}

// Validate CLI arguments - required values, useful error messages
if (!command) {
    console.error("Command is required.");
    process.exit(1);
}

if (command === "add" && (!firstName || !department)) {
    console.error("The add command requries a first name and department.");
    process.exit(1);
}