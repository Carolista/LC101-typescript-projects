var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// The variables that are commented out will be moved into the Spacecraft class
// let spaceCraft: string = "Space Shuttle";
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;
// This function will also be moved into the Spacecraft class
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var miles = kilometersAway * this.milesPerKilometer;
        var hours = miles / this.speedMph;
        var days = Math.round(100 * hours / 24) / 100;
        return days;
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
console.log("It will take the shuttle " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilometersToMars) + " days to get to Mars.");
console.log("It will take the shuttle " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " days to get to the moon.");
