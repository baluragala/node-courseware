//2-async-with-events.js

// import and create EventEmitter instance
const EventEmitter = require('events').EventEmitter;
const eventEmitter = new EventEmitter();

//define events
const COOKED = 'COOKED';
const ORDER = 'ORDER';
const ERROR = 'ERROR';

//register for events
eventEmitter.on(ORDER, prepareFood);
eventEmitter.on(COOKED, serveOrder);
eventEmitter.on(ERROR, handleError);

function handleError(orderFor, message) {
  console.error(orderFor, message);
}

function prepareFood(orderFor, items) {
  let cookingTime = items.length * 1000;
  console.log(orderFor + ' - started cooking :', items);
  if (items.length > 5) {
    eventEmitter.emit(ERROR, orderFor, 'Order cannot be processed');
    return;
  }
  setTimeout(function () {
    //emit or raise events with required args
    eventEmitter.emit(COOKED, orderFor + ' - bon appétit, ', items.toString())
  }, cookingTime);
}

function serveOrder(orderFor, cookedFood) {
  console.log(orderFor + ' - Serving ' + cookedFood);
}

function takeOrder(orderFor, items) {
  console.log(orderFor + ' - Passing ' + items + ' order to kitchen');
  //emit or raise events with required args
  eventEmitter.emit(ORDER, orderFor, items);
}

let itemsForTable1 = ['Sandwich', 'burger', 'fresh juice', 'pasta'];
let itemsForTable2 = ['Pizza', 'coke'];
let itemsForTable3 = ['Chicken Soup', 'Fried Chicken', 'Coke'];
let itemsForTable4 = ['Chicken Soup', 'Fried Chicken', 'Coke', 'Sandwich', 'burger', 'fresh juice', 'pasta'];

takeOrder('table1', itemsForTable1);
takeOrder('table3', itemsForTable3);
takeOrder('table2', itemsForTable2);
takeOrder('table4', itemsForTable4);