let a = parseFloat(prompt('Please indicate length of first side of triangle', '0'));
let b = parseFloat(prompt('Please indicate length of second side of triangle', '0'));
let angle = parseFloat(prompt('Please indicate angle between triangle sides' , '0'));

const angleSum = 180;

let consoleMessage = (c, perimeter, square) =>
'c length: ' + +c.toFixed(2) +
'\nTriangle square: ' + +square.toFixed(2) +
'\nTriangle perimeter: ' + +perimeter.toFixed(2);

let consoleResult;

if (a > 0 && b > 0 && angle > 0 && angle < angleSum) {
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(Math.PI/angleSum * angle));
    let perimeter = a + b + c;
    let p = perimeter/2;
    let square = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    consoleResult = consoleMessage(c, perimeter, square);
} else {
    consoleResult = 'Invalid data';
}

console.log(consoleResult);
