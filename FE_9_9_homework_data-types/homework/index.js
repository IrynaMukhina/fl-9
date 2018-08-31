function findType(parameter) {

    return typeof parameter;
}

function forEach(taskArray, taskFunction) {
    for(let i = 0; i < taskArray.length; i++) {
        taskFunction(taskArray[i]);
    }
}

function map(taskArray, taskFunction) {
    let transformedArray = [];
    forEach(taskArray, function(item) {
        transformedArray.push(taskFunction(item));
    });

    return transformedArray;
}

function filter(taskArray, taskFunction) {
    let filteredArray = [];
    forEach(taskArray, function(item) {
        if(taskFunction(item)) {
            filteredArray.push(item);
        }
    });
    
    return filteredArray;
}

function getAdultAppleLovers(taskArray) {
    let adultAppleLovers = filter(taskArray, function(key) {

        return key.age > 18 && key.favoriteFruit === 'apple';
    });
      
    return map(adultAppleLovers, function(key) {
    
        return key.name;
    });
}

function keys(taskObject) {
    let keysArray = [];
    for(let key in taskObject) {
        if(taskObject.hasOwnProperty(key)) {
            keysArray.push(key);
        }
    }

    return keysArray;   
}

function values(taskObject) {
    let valuesArray = [];
    for(let value in taskObject) {
        if(taskObject.hasOwnProperty(value)) {
            valuesArray.push(taskObject[value]);
        }
    }

    return valuesArray; 
}

function showFormattedDate(date){
    let day = date.getDate();
    let month = date.getMonth();
    let monthLetters = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];
    let year = date.getFullYear();

    return `It is ${day} of ${monthLetters[month]}, ${year}`;
}
