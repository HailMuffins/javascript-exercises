const add = function(firstNumber, secondNumber) {
	return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(numbers) {
	if(numbers.length === 0) {
    return 0;
  }

  const result = numbers.reduce((total, number) => {
    return total + number;
  });

  return result;
};

const multiply = function(numbers) {
	if(numbers.length === 0) {
    return 0;
  }

  const result = numbers.reduce((total, number) => {
    return total * number;
  });

  return result;
};

const power = function(firstNumber, secondNumber) {
	return Math.pow(firstNumber, secondNumber);
};

const factorial = function(number) {
	let result = 1;
  for(let i = number; i > 1; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
