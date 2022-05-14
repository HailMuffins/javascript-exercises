const fibonacci = function(index) {
    if(index < 0) {
        return "OOPS";
    }

    let sequence = [0, 1, 1];

    for(let i = 3; i < 51; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }

    let fibonacciNumber = index.valueOf();

    return sequence[fibonacciNumber];
};

// Do not edit below this line
module.exports = fibonacci;
