var fs = require("fs");

// var input = fs.readFileSync("./input.txt");

var input = fs.readFileSync("./input.txt").toString();

// console.log(input.toString());

// console.log(input);

var numberStrings = input.split("\n");

// console.log(numberStrings);

// Convert numberstrings into an array of integers to be able to add them

var total = 0;
var numbers = [];

for (var i = 0; i < numberStrings.length; i++) {
  var string = numberStrings[i];

  var number = parseInt(string, 10);

  if (!isNaN(number)) {
   // numbers.push(number);
   total = total + number;
  }
}

//console.log(numbers);
console.log(total);

// var total = 0;

// for (var i = 0; i < numbers.length; i++) {
//   var number = numbers[i];

//   total = total + number;
// }

// console.log(total);


