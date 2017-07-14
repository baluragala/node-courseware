//3-async-with-callback.js

function prepareFood(orderFor, items, callback) {
	let cookingTime = items.length * 1000;
	console.log(orderFor + ' - started cooking :');
	setTimeout(function(){
		callback(orderFor + ' - bon appétit, ' + items.toString())
	},cookingTime);
}

function serveOrder(orderFor, cookedFood){
	console.log(orderFor + ' - Serving' + cookedFood);
}

function takeOrder(orderFor,items){
	console.log(orderFor + ' - Passing '  + items + ' order to kitchen');
	prepareFood(orderFor, items,serveOrder)
}

let itemsForTable1 = ['Sandwhich','burger', 'fresh juice', 'pasta'];
let itemsForTable2 = ['Pizza','coke'];
let itemsForTable3 = ['Chicken Soup','Fried Chicken', 'Coke'];

takeOrder('table1',itemsForTable1);
takeOrder('table3',itemsForTable3);
takeOrder('table2',itemsForTable2);
