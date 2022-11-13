class Person {
    constructor(name, address, hobbies) {
        this.name = name;
        this.address = address;
        this.hobbies = hobbies;
    }

    print() {
        console.log(this);
    }
}

const printPersonStreet = (person) => {

    // To make handleing missing data easier JS added optional chianing
    // Optional chaining is: ?. 
    // It will check to see if the value exists before trying to access it.
    // If the date is missing the result is: undefined
    console.log(person?.address?.street);
}

const mike = new Person(
    "mike",
    { street: "12345 Jefferson Starship", city: "Rock'n'Roll" },
    ["Gardening", "Wood Working", "Cooking"]
);

mike.print();
printPersonStreet(mike);


const badman = new Person(
    "Strong Bad",
    undefined,
    ["Email", "Fans", "Wrestling", "Trogdor"]
);

badman.print();
printPersonStreet(badman);

// Optional chaining can also be used to check the existance of funcitons
// Here is an example of trying to call a class funciton that does not exist. 
mike.printName?.();

// calling funcitons that are not part of an object will still throw an error. 
// thisFuntionDoesNotExist?.(); // throws an error
