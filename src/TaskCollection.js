// ES6 Modules export
class TaskCollection {
	constructor(tasks = []){
		this.tasks = tasks;
	}

	dump(){
		console.log(this.tasks);
	}
}

let foo = 'bar';

myFunc = function(){
	return {foo: 'bar'};
};

// exports
export default TaskCollection;
export foo;
export myFunc;