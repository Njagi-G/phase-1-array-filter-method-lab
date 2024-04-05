// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


//Instruction 1

function findMatching (drivers, str) {

    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());

}

findMatching(drivers, "sally");

console.log(findMatching(drivers, "sally"));


//Instruction 2

function fuzzyMatch (drivers, str) {

    return drivers.filter(driver => driver.startsWith(str));

}

fuzzyMatch(drivers, "Bo");

console.log(fuzzyMatch(drivers, "Bo"));


//Instruction 3

function matchName (driversAsObjects, str) {
    
    return driversAsObjects.filter(driver => driver.name === str);

}

const driversAsObjects = [
    {
        name: "Bobby",
        hometown: "Nairobi",
    },
    {
        name: "Sammy",
        hometown: "Mombasa",
    },
    {
        name: "Sally",
        hometown: "Kisumu",
    },
    {
        name: "Annette",
        hometown: "Nakuru",
    },
    {
        name: "Sarah",
        hometown: "Eldoret",
    },
    {
        name: "Bobby",
        hometown: "Kakamega",
    },
];

matchName(driversAsObjects, "Annette");

console.log(matchName(driversAsObjects, "Annette"));
