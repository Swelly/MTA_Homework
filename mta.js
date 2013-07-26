// Refactor your code with underscore
// Prompt the user
// Please choose a startLine
// Please chooose a startStation
// Please choose an endLine
// Please choose an endStation
// Find the intersection
// Display the number of stops
// Track the total journeys taken
// Calculate total cost of journeys taken at $2.50 per ride.

function Train(name, stations) {
  this.name = name;
  this.stations = stations;
}

Train.prototype.distance = function (board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];
var sStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);
var sTrain = new Train('The S Train', sStations);

var trains = [lTrain, nTrain, sixTrain, gTrain, sTrain];
var trainNames = "";
var stationElements = "";

// function displayLines() {
//   var trainNames = "";
//   for (var i = 0; i < trains.length; i++) {
//     trainNames += trains[i].name + "\n";
//   }
//   forEach(trains, trainName);
//   return trainNames.trim();
// }
// ^^ Replacing displayLines (naming trains) ^^
// with the _.each function *trainId*
  //_.each(list, iterator, [context])
_.each(trains, function(train){ trainNames += '\n' + train.name;});

var msg = "Which train would you like to get on?\n" + trainNames;
var startTrain = prompt(msg);

// Taking input to declare startLine
// _.find(list, iterator, [context])
var startLine = _.find(trains, function(input) {return startTrain === input.name;}); //finds matching train with name value


function startLineStations () {
  _.each(startLine.stations, function(ele) {stationElements += '\n' + ele;});
  return stationElements;
}
var msg2 = "Which station would you like to get on?\n" + startLineStations();
var startStation = prompt(msg2);
  // Replacing with ._each to display the
  // individual array elements
// function displayStations() {
//   var train = null;
//   for (var j = 0; j < trains.length; j++) {
//     if (trains[j].name === startTrain) {
//       train = trains[j];
//     }
//   }
//   var trainStations = "";
//   for (var k = 0; k < train.stations.length; k++) {
//     trainStations += train.stations[k] + "\n";
//   }
//   return trainStations.trim();
// }

// Moving prompts accordingly to the process in which a
// user commits their input

// Class examples of forEach and map
// function forEach(array, func) {
//   for (var i = 0; i < array.length; i++) {
//     func(array[i]);
//   }
// }
// function map(array, func) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     newArray.push(func(array[i]));
//   }
//   return newArray;
// }
