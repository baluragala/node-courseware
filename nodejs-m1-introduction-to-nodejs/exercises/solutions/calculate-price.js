function calculatePrice(price, tax, discount){
	//total = price + tax - discount
	let totalPrice = price + (price * tax / 100) - (price * discount / 100);
	return totalPrice;
}

let price, tax, discount;

price=150;
tax=18;
discount=20;

let totalPrice = calculatePrice(price,tax,discount)
console.log(totalPrice);