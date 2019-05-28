var number = Number(process.argv[2]);

var randomNumArr = [];
function getRandomNum(min, max) {
  for (var i = 0; i < number; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomNum = Math.floor(Math.random() * (max - min)) + min;
    randomNumArr.push(randomNum);
  }
  return randomNumArr;
}

getRandomNum(1, 7);

console.log("Rolled " + number + " dice: " + randomNumArr.join());