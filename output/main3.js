"use strict";

var _console;

// REST PARAMETERS
function sum_rest() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	// return numbers.reduce(function(prev, current){
	// 	return prev + current;
	// });
	// ARROW SYNTAX
	return numbers.reduce(function (prev, current) {
		return prev + current;
	});
}

console.log(sum_rest(1, 2, 3, 4, 5));

// SPREAD PARAMETERS
function sum_spread(x, y) {
	return x + y;
}

var nums = [1, 2];

(_console = console).log.apply(_console, nums);

console.log(sum_spread.apply(undefined, nums));