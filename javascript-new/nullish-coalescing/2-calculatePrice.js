// Add default values

const calculatePrice = (price, taxes, description) => {

    // add defaults
    taxes = taxes || .05;
    description = description || 'unknown item';

    // original code
    const total = price * (1 + taxes);
    console.log(`${description} with tax: $${total}`);
}

calculatePrice(100, 0.07, "Orange mocha frappuccino!");
calculatePrice(100, 0, "Orange mocha frappuccino!");
calculatePrice(100, undefined, '');


// The problem is that the defaults will evaluate 0 or an empty string as false.
// While the defaults could be expanded to guard statements with Nullish Coalescing javascript has another way to do this.