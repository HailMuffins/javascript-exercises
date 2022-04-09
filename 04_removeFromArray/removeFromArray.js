const removeFromArray = function(array, ...theArgs) {
    for(let i = 0; i < theArgs.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j] === theArgs[i]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// function (array, argument) {
//     return array !== argument;
// }

// Do not edit below this line
module.exports = removeFromArray;
