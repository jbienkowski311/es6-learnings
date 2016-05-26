function getPerson1(){
	let name = 'Jakub';
	let age = 22;
	let ES6;

	// ES5 return object syntax
	return {
		name: name,
		age: age,
		ES6: false,
		greet: function(){
			return 'Hello, ' + this.name;
		}
	};
}

// Object and Method shorthands
function getPerson2(){
	let name = 'Jakub';
	let age = 22;
	let ES6;

	// ES6 syntax - if key and valuea are exactly the same we can omit them!
	return {
		name,
		age,
		ES6: true,
		greet() {
			return `Hello, ${this.name}`;
		}
	};
}

console.log(getPerson1());
console.log(getPerson1().greet());
console.log(getPerson2());
console.log(getPerson2().greet());

// Object destructuring
// Pretty useful when you work with API calls
let person = {
	name: 'Karen',
	age: 32,
	gender: 'female',
	hometown: 'Nebraska'
};

// Retrieve only portion of person object
let {name, age} = person; // same as var name = person.name; var age = person.age;
console.log(name, age);

// It can be used even in function argument!
function getPersonFromObj({name, age}){
	console.log(`Hello ${name}. You are ${age}.`);
}
getPersonFromObj(person);