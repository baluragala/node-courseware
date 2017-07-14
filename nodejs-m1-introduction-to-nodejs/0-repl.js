//0-repl.js
let message='Hello World';
console.log(message);

-------------------------------
function square(n){
	return n * n;
}
square(4);
-------------------------------

Math.round(Math.random() * 100)

--------------------------------
const http=require('http');
http. ( use tab to see the api by REPL intellisense)

--------------------------------

simple http server

let listener = function(request, response) { response.end('<h1>node is awesome</h1>') }
require('http').createServer(listener).listen(3000)