let perfStart = 0;
const timer = (methodUsed) => {

    if (perfStart) {
        console.log(`${methodUsed} took: ` + (performance.now() - perfStart));
        perfStart = 0;
        return;
    }

    perfStart = performance.now();
}

const arr = [8, 4, 7, 1, 9, 3, 0, 3, 8, 4];

// While Loop
let i = 0;
let sum = 0;
timer('While');
while (i < arr.length) {
    sum += arr[i];
    i++;
}
console.log(sum);
timer('While');

timer('While');
while (i < arr.length) {
    sum += arr[i];
    i++;
}
console.log(sum);
timer('While');

// Do While Loop
i = 0;
sum = 0;
timer('Do-While');
do {
    sum += arr[i];
    i++;
} while (i < arr.length);
console.log(sum);
timer('Do-While');

// For Loop
sum = 0;
timer('For');
for (i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);
timer('For');

// For In Loop
sum = 0;
timer('For In');
for (let val in arr) {
    sum += arr[val];
}
console.log(sum);
timer('For In');

// For Of Loop
sum = 0;
timer('For Of');
for (const num of arr) {
    sum += num;
}
console.log(sum);
timer('For Of');

// For Each Method
timer('For Each');
sum = 0;
arr.forEach((num) => { sum += num });
console.log(sum);
timer('For Each');

// Iterator
// let it = arr[Symbol.iterator]();
// console.log(it.next().value);