'use strict';  

function isPrime(num) {
    let divideNum = 2;
    if( num % divideNum === 0 ) {
        return false;
    } 
        return num % 1 === 0 && num > 0;
}
