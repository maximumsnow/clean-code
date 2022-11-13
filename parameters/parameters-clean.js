const mockPerson = {
    fName: "Tommy",
    lName: "Tutone",
    street: "1981 California Ave",
    aptNum: undefined,
    city: "Portland",
    state: "OR",
    zip: 12345,
    phone: "8675-309",
    email: "TomAndJenny@tutone.com"
}

const fillRegistrationForm = function ({ fName, lName, street, aptNum, city, state, zip, phone, email }) {
    console.log(`First Name: ${fName}`);
    console.log(`Last Name: ${lName}`);
    console.log(`Street Address: ${street}`);
    console.log(`Apartment Number: ${aptNum}`);
    console.log(`City: ${city}`);
    console.log(`State: ${state}`);
    console.log(`Zip Code: ${zip}`);
    console.log(`Phone#: ${phone}`);
    console.log(`Email Address: ${email}`);
}

console.log(fillRegistrationForm(mockPerson)); //Only one argument
