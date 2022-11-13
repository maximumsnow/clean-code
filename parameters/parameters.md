# Clean Code Parameters

## Dirty Code

```javascript
const fillRegistrationForm = function (
  fName,
  lName,
  street,
  aptNum,
  city,
  state,
  zip,
  phone,
  email
) {
  console.log(`First Name: ${fName}`);
  console.log(`Last Name: ${lName}`);
  console.log(`Street Address: ${street}`);
  console.log(`Apartment Number: ${aptNum}`);
  console.log(`City: ${city}`);
  console.log(`State: ${state}`);
  console.log(`Zip Code: ${zip}`);
  console.log(`Phone#: ${phone}`);
  console.log(`Email Address: ${email}`);
};

console.log(
  fillRegistrationForm(
    "Tommy",
    "Tutone",
    "1981 California Ave",
    undefined,
    "Portland",
    "OR",
    12345,
    "8675-309",
    "TomAndJenny@tutone.com"
  )
);
```

**Output**:

> First Name: Tommy
> Last Name: Tutone
> Street Address: 1981 Califorinia Ave
> Apartment Number: undefined
> City: Portland
> State: OR
> Zip Code: 12345
> Phone#: 8675-309
> Email Address: TomAndJenny@tutone.com

### Why it is Dirty?

#### 1. Too many Parameters

The above code violates the clean code priciple of no more than 3 parameters in a function. The idea behind this is that if the funtion is using more than 3 parameters typically it is doing more than one thing which is also a violation of clean code.

#### 2. Parameter Sequencing Matters

If arguments are not passed in the correct order, we can end up with errors.

In the above example the apartment number is undefined. What if the programmer left it out because there is no apartment number. The result would look like this:

```javascript
> First Name: Tommy
> Last Name: Tutone
> Street Address: 1981 Califorinia Ave
> Apartment Number: Portland
> City: OR
> State: 12345
> Zip Code: 8675-309
> Phone#: TomAndJenny@tutone.com
> Email Address: undefined
```

You can see that all the arguments moved up one parameter and email is now undefined because not enough arguments were passed to the function.

#### 3. Unused Parameters

If code is refactored to comment out the use of a parameter ESLint will complain.

## Clean the Code

How do we clean the code without loosing functionality in the funciton?

One answer is creating a higher-level object as an argument. Creating one higher level object and using ES2015/ES6 destructureing syntax is a good approach to overcoming the problem.

Consider this mockPatientZero which will contain all the necessary values that our function may need. It could also contain information needed for other functions without effecting our function.

```javascript
const mockPatientZero = {
  fName: "Tommy",
  lName: "Tutone",
  street: "1981 California Ave",
  aptNum: undefined,
  city: "Portland",
  state: "OR",
  zip: 12345,
  phone: "8675-309",
  email: "TomAndJenny@tutone.com",
};
```

Now we re-write the function to accept a desctructured object allowing us to specify the keys we want to take into the function as parameters.

```javascript
const fillRegistrationForm = function ({
  fName,
  lName,
  street,
  aptNum,
  city,
  state,
  zip,
  phone,
  email,
}) {
  console.log(`First Name: ${fName}`);
  console.log(`Last Name: ${lName}`);
  console.log(`Street Address: ${street}`);
  console.log(`Apartment Number: ${aptNum}`);
  console.log(`City: ${city}`);
  console.log(`State: ${state}`);
  console.log(`Zip Code: ${zip}`);
  console.log(`Phone#: ${phone}`);
  console.log(`Email Address: ${email}`);
};
```

Now when calling the function we only use one argument.

```javascript
fillRegistrationForm(mockPatientZero);
```

And now the code is clean. The funciton takes 1 argument, sequencing is no longer a factor with the descructured object, and parameters can be removed without effecting the code that calls the function.
