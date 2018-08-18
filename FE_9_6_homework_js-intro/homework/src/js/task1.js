let fullPrice = parseFloat(prompt('Please enter full price', '0'));
let discount = parseFloat(prompt('Please enter amount of your discount', '0'));

let consoleMessage = (fullPrice, discount, discPrice, savedAmount) =>
'Price without discount: ' + +fullPrice.toFixed(2) +
'\nDiscount: ' + +discount.toFixed(2) + '%' + 
'\nPrice with discount: ' + +discPrice.toFixed(2) + 
'\nSaved: ' + +savedAmount.toFixed(2);

let consoleResult;

if (fullPrice > 0 && 0 >= discount <= 100) {
    let discPrice = fullPrice - fullPrice * discount / 100;
    let savedAmount = fullPrice - discPrice;
    consoleResult = consoleMessage(fullPrice, discount, discPrice, savedAmount);
} else {
    consoleResult = 'Invalid data';
}

console.log(consoleResult);

