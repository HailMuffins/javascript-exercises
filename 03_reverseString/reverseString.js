const reverseString = function(string) {
    let stringArray = string.split('');
    stringArray.reverse();
    let newString = '';
    if(string === '') {
        return '';
    } else {
        for(let i = 0; i < stringArray.length; i++) {
            newString += stringArray[i];
        }
    }


    return newString;
};

// Do not edit below this line
module.exports = reverseString;
