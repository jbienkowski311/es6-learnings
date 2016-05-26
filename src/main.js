let names = ['Taylor', 'Adam', 'Robert'];

// instead of this
// names = names.map(function(name){
// 	return name + ' is cool.';
// });

// we can use this
names = names.map(name => `${name} is cool.`); // template strings YAY

console.log(names);

// VAR, LET, CONST

const arr = ['Andrew', 'Mathew', 'Maria'];
// this won't work, commented because of the Babel compilator
// arr = ['Me', 'You'];
// this will however work
arr.push('Gloria');

function fire1(bool){
	if(bool){
		var foo = 'bar';
		console.log(foo);
	}else{
		console.log(foo);
	}
}

function fire2(bool){
	if(bool){
		let foo = 'bar';
		console.log(foo);
	}else{
		console.log(foo);
	}
}

fire1(true);
// UNDEFINED
fire1(false);
fire2(true);
// ERROR
fire2(false);