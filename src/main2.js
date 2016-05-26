function defaultDiscountRate(){
	return .1;
}

function applyDiscount(cost, discount = defaultDiscountRate()){
	// ES5 syntax: discount = discount || 0.10;

	return cost - (cost*discount);
}

console.log(applyDiscount(100));