//2-async.js
var count = 0;

console.log('Generating 5 lucky numbers of the day !!!')
var handler = setInterval(function() {
    count++;
    console.log("Current lucky number : " + Math.round(Math.random() * 100));
    if (count === 5) {
        clearInterval(handler);
        //console.log('Run me again tomorrow');
    }
}, 500);

//console.log('Run me again tomorrow'); // this runs even after 5 numbers are generated;
