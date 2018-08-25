'use strict';  

function getMin () {
    let minNum = arguments[0];
    for (let i = 0; i <= arguments.length-1; i++) {
        if(arguments[i] < minNum) {
            minNum = arguments[i];
        }
    }

    return minNum;
}

