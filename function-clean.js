// define a function (wow! that is 8 chars shorter)
const add = (x, y) => x + y;

// use it
console.log(add(1, 2)); // 3

// someone tries to mutate the function
add = (x, y) => x - y; // Uncaught TypeError: Assignment to constant variable.
// the intruder fails and your function remains unchanged