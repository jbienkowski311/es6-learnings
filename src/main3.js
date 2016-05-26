// REST PARAMETERS
function sum_rest(...numbers){
	// return numbers.reduce(function(prev, current){
	// 	return prev + current;
	// });
	// ARROW SYNTAX
	return numbers.reduce((prev, current) => prev + current);
}

console.log(sum_rest(1,2,3,4,5));

// SPREAD PARAMETERS
function sum_spread(x, y){
	return x + y;
}

let nums = [1, 2];

console.log(...nums);

console.log(sum_spread(...nums));