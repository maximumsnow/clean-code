const fillRegistrationForm = function (fName, lName, street, aptNum, city, state, zip, phone, email) {
    console.log(`First Name: ${fName}`);
    console.log(`Last Name: ${lName}`);
    console.log(`Street Address: ${street}`);
    if (aptNum) { console.log(`Apartment Number: ${aptNum}`) };
    console.log(`City: ${city}`);
    console.log(`State: ${state}`);
    console.log(`Zip Code: ${zip}`);
    console.log(`Phone#: ${phone}`);
    console.log(`Email Address: ${email}`);
}

console.log(fillRegistrationForm("Tommy", "Tutone", "1981 California Ave", undefined, "Portland", "OR", 12345, "8675-309", "TomAndJenny@tutone.com"));
