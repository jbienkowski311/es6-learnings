// ES6 Modules export
var TaskCollection = function TaskCollection(tasks){
	if ( tasks === void 0 ) tasks = [];

	this.tasks = tasks;
};

TaskCollection.prototype.dump = function dump(){
	console.log(this.tasks);
};

var foo = 'bar';

function myFunc(){
	return {foo: foo};
};

new TaskCollection(['Eat', 'Sleep', 'Rave', 'Repeat']).dump();
console.log(myFunc());