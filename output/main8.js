// ES6 Modules export
class TaskCollection{
	constructor(tasks = []){
		this.tasks = tasks;
	}

	dump(){
		console.log(this.tasks);
	}
}

let foo = 'bar';

function myFunc(){
	return {foo};
};

new TaskCollection(['Eat', 'Sleep', 'Rave', 'Repeat']).dump();
console.log(myFunc());