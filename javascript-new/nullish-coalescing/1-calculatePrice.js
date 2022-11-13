const calculatePrice = (price, taxes, description) => {
    const total = price * (1 + taxes);
    console.log(`${description} with tax: $${total}`);
}

calculatePrice(100, 0.07, "Orange mocha frappuccino!");