const logWithSytle = (string1) => {

    // add %c to where you want to start the style
    // add a 2nd argument containing the css style
    console.log(`%cWith style: ${string1}`, "font-weight: bold; color: orange");
    console.log(`Without style: ${string1}`);
}

const logWithMultipleStyles = (string1, string2) => {

    // add an addtional %c and an additional argument to use multiple styles in the console log.
    // to clear styles use the %c with an empty argument string ""
    console.log(`With styles: %c${string1}: %c${string2}`, "font-weight: bold; color: orange", "color: tan");
    console.log(`With styles: ${string1}: ${string2}`);
}


logWithSytle("Jazz Hands!!!");
logWithMultipleStyles("My name is", "Mike Snow");
