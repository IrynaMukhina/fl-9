//task 1
function findType(parameter) {
    let type = typeof parameter;

    return type;
}

//task 2
function forEach(taskArray, taskFunction) {
    for(let i = 0; i < taskArray.length; i++) {
        taskFunction(taskArray[i]);
    }
}

//task 3
function map(taskArray, taskFunction) {
    let transformedArray = [];
    forEach(taskArray, function(item) {
        transformedArray.push(taskFunction(item));
    });

    return transformedArray;
}

//task 4
function filter(taskArray, taskFunction) {
    let filteredArray = [];
    forEach(taskArray, function(item) {
        if(taskFunction(item)) {
            filteredArray.push(item);
        }
    });
    
    return filteredArray;
}

//task 5
function getAdultAppleLovers(taskArray) {
    let adultAppleLoversArray = [];
    filter(taskArray, function(val) {
        if(val.age >= 18 && val.favoriteFruit === 'apple') {
            adultAppleLoversArray.push(val.name);
        }
    });

    return adultAppleLoversArray;
}
  
//task 6
function keys(taskObject) {
    let keysArray = [];
    for(let key in taskObject) {
        if(taskObject.hasOwnProperty(key)) {
            keysArray.push(key);
        }
    }

    return keysArray;   
}

//task 7
function values(taskObject) {
    let valuesArray = [];
    for(let value in taskObject) {
        if(taskObject.hasOwnProperty(value)) {
            valuesArray.push(taskObject[value]);
        }
    }

    return valuesArray; 
}

//task 8
function showFormattedDate(date){
    let day = date.getDay();
    let month = date.getMonth();
    let monthLetters = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep','Oct', 'Nov', 'Dec'];
    let year = date.getFullYear();

    return 'It is ' + day + ' of ' + monthLetters[month] + ', ' + year;
}
