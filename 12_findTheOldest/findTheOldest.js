const findTheOldest = function(people) {
    for(let i = 0; i < people.length; i++) {
        if(people[i].yearOfDeath === undefined) {
            const d = new Date();
            people[i].yearOfDeath = d.getFullYear();
        }
    }
    
    const oldest = people.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);

    return oldest[oldest.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
