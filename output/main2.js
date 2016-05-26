"use strict";

function defaultDiscountRate() {
	return .1;
}

function applyDiscount(cost) {
	var discount = arguments.length <= 1 || arguments[1] === undefined ? defaultDiscountRate() : arguments[1];

	// ES5 syntax: discount = discount || 0.10;

	return cost - cost * discount;
}

console.log(applyDiscount(100));