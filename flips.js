// Import the coinFlip function from your coin.mjs file
import defaultExport from "./modules/coin.mjs";
//const process = require('process');

var sex = process.argv.slice(2);


var value = sex[0];

var numOfFlips = 1;

if (value != null && value.includes("--number=")){
    numOfFlips = value.slice(9);
}
//console.log(numOfFlips)
var flips = defaultExport.coinFlips(numOfFlips);
//console.log(numOfFlips);
console.log(flips)
console.log(defaultExport.countFlips(flips));

//console.log(defaultExport.countFlips(['heads', 'tails']))
