const name = 'Mike';
const favoriteFood = 'Pizza';

const mike = {
    name: name,
    favoriteFood: favoriteFood
}

console.log(mike);


// We can do the same thing with Object Shorthand.
// Both of these objects are the exact same.
// If the key is the same name as the variable the value is being set to you only need to specify the key.

const mikeShortHand = {
    name,
    favoriteFood
}

console.log(mikeShortHand);
