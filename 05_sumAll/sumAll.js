const sumAll = function(min, max) {
    let sum = 0;

    if(min < 0 || max < 0) {
        return 'ERROR';
    } else if(isNaN(min) || isNaN(max)) {
        return 'ERROR';
    } else if(typeof min === 'string' || typeof max === 'string') {
        return 'ERROR';
    } else if (min > max) {
        for(let i = min; i >= max; i--) {
            sum += i;
        }
    } else {
        for(let i = min; i <= max; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
