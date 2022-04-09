function repeatString(string, repetitions) {
    let toRepeat = string;
    
    if(repetitions < 0) {
        return 'ERROR';
    } else if(repetitions === 0) {
        return '';
    } else {
        for(let i = 1; i < repetitions; i++) {
            toRepeat += string;
        }
    }

    return toRepeat;
};

// Do not edit below this line
module.exports = repeatString;
