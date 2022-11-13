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

    // It used to be that you would have to do checks like this.
    if (person && person.address && person.address.street) {
        console.log(person.address.street);
    }

    // Or like this if you want to log undefined
    console.log(person && person.address && person.address.street);
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

