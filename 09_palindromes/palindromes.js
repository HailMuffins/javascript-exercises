const palindromes = function (word) {
    const palindrome = word
                        .toLowerCase()
                        .split('')
                        .filter(letter => letter !== '.' && letter !== '!' && letter !== '?' && letter !== ',' && letter !== ' ')
                        .reverse()
                        .join('');
    
    const realWord = word
                        .toLowerCase()
                        .split('')
                        .filter(letter => letter !== '.' && letter !== '!' && letter !== '?' && letter !== ',' && letter !== ' ')
                        .join('');
    return realWord === palindrome;
};

// function palindromes(word) {
//     const palindrome = word
//                         .toLowerCase()
//                         .split('')
//                         .filter(letter => letter !== '.' && letter !== '!' && letter !== '?' && letter !== ',' && letter !== ' ')
//                         .reverse()
//                         .join('');
    
//     const realWord = word
//                         .toLowerCase()
//                         .split('')
//                         .filter(letter => letter !== '.' && letter !== '!' && letter !== '?' && letter !== ',' && letter !== ' ')
//                         .join('');
//     return realWord === palindrome;
// };

// Do not edit below this line
module.exports = palindromes;
