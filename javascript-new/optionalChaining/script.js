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
    console.log(person.address.street);
}

// complete
const mike = new Person(
    "mike",
    { street: "12345 Jefferson Starship", city: "Rock'n'Roll" },
    ["Gardening", "Wood Working", "Cooking"]
);

// works
mike.print();
printPersonStreet(mike);


// Missing address
const badman = new Person(
    "Strong Bad",
    undefined,
    ["Email", "Fans", "Wrestling", "Trogdor"]
);

// will throw error b/c badman has no street
badman.print();
printPersonStreet(badman);

