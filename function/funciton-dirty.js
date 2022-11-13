// define a function
function add(x, y) { return x + y; }

// use it
console.log(add(1, 2)); // 3

// oops, someone mutated your function
add = function (x, y) { return x - y; };

// now this is not what you expected
console.log(add(1, 2)); // -1