'use strict';  

function reverseNumber(n) {
    n = n + '';
    let reverseRusult = +n.split('').reverse().join('');

    if(n > 0) {

        return reverseRusult;
    }else {
        let sliceNum = -1;
        reverseRusult = +('-' + n.split('').reverse().join('').slice(0,sliceNum));
        
        return reverseRusult;
    } 
}
