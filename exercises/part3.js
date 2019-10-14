// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
var spacecraftName = "Determination";
var speedMph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Code the "getDaysToLocation" function here:
function getDaysToLocation(kilometersAway) {
    var miles = kilometersAway * milesPerKilometer;
    var hours = miles / speedMph;
    var days = Math.round(100 * hours / 24) / 100;
    return days;
}
// Call the function and print the outputs for the Mars trip and the moon trip:
console.log("It will take the shuttle " + spacecraftName + " " + getDaysToLocation(kilometersToMars) + " days to get to Mars.");
console.log("It will take the shuttle " + spacecraftName + " " + getDaysToLocation(kilometersToTheMoon) + " days to get to the moon.");
