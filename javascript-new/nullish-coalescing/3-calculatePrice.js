// Implement Nullish Coalescing

const calculatePrice = (price, taxes, description) => {

    // add Nullish Coalescing
    taxes = taxes ?? .05;
    description = description ?? 'unknown item';

    const total = price * (1 + taxes);
    console.log(`${description} with tax: $${total}`);
}

calculatePrice(100, 0.07, "Orange mocha frappuccino!");
calculatePrice(100, 0, "Orange mocha frappuccino!");
calculatePrice(100, undefined, undefined);