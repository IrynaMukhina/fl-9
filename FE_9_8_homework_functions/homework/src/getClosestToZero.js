'use strict';

function getClosestToZero() {
    let closestToZero = arguments[0];

    for (let i = 0; i <= arguments.length-1; i++) {
        if(Math.abs(arguments[i]) < Math.abs(closestToZero)) {
            closestToZero = arguments[i];
        }
    }

    return closestToZero;
}
