// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code the "getDaysToLocation" function here:

function getDaysToLocation(kilometersAway: number): number { 
    let miles = kilometersAway * milesPerKilometer;
    let hours = miles / speedMph;
    let days = Math.round(100* hours / 24) / 100; 
    return days;
}

// Call the function and print the outputs for the Mars trip and the moon trip:

console.log(`It will take the shuttle ${spacecraftName} ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
console.log(`It will take the shuttle ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} days to get to the moon.`);