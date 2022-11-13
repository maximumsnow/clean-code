// use an object instead of a switch statement
const getExtensionFromObject = (extention) => {

    const extensionObj = {
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'applicaiton/json',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.txt': 'text/plain'
    };

    return (extensionObj[extention] || 'text/html');
}

console.log(getExtensionFromObject('.css'));


// use a map instead of a switch statement
const getExtensionFromMap = (extension) => {

    const extentionMap = new Map([
        ['.css', 'text/css'],
        ['.js', 'applicaiton/json'],
        ['.json', 'applicaiton/json'],
        ['.jpeg', 'image/jpeg'],
        ['.png', 'image/png'],
        ['.txt', 'text/plain']
    ]);

    return (extentionMap.get(extension) || 'text/html');
}

console.log(getExtensionFromMap('.js'));


// Map vs Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
