// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

// Part 1: Add the 5 variables here

let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Code part 2 here:

let milesToMars = kilometersToMars * milesPerKilometer;
let hoursToMars = milesToMars / speedMph;
let daysToMars = Math.round(100* hoursToMars / 24) / 100; 

// Code the output statement here (use a template literal):

console.log(`It will take the shuttle ${spacecraftName} ${daysToMars} days to reach Mars.`);
