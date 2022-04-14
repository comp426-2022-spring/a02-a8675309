// Import the coinFlip function from your coin.mjs file
import defaultExport from "./modules/coin.mjs";
//const process = require('process');

var sex = process.argv.slice(2);


var value = sex[0];

var call = "";

if (value != null && value.includes("--call=")){
    call = value.slice(7);
    //console.log(call)
}
else{
    console.error('Error: no input');
    console.error('Usage: node guess-flip --call=[heads|tails]')
    process.exit(1)
}
//console.log(numOfFlips)

var flip = defaultExport.coinFlip();
var result = 'lose';
if (flip == call){
    result = 'win'
}

console.log({call : call, flip : flip, result : result});


//console.log(defaultExport.countFlips(['heads', 'tails']))
