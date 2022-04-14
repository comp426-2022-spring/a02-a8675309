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
    console.log('Error: no input');
    console.log('Usage: node guess-flip --call=[heads|tails]')
    console.log('fuck me')
    process.exit(0)
}
//console.log(numOfFlips)

var flip = defaultExport.coinFlip();

if (call != 'heads' || call != 'tails'){
    console.log('Error: no input');
    console.log('Usage: node guess-flip --call=[heads|tails]')
    console.log('fuck me')
    process.exit(0)
}

var result = 'lose';
if (flip == call){
    result = 'win'
}
console.log('fuck me')
console.log({call : call, flip : flip, result : result});


//console.log(defaultExport.countFlips(['heads', 'tails']))
