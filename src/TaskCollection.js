// ES6 Modules export
class TaskCollection{
	constructor(tasks = []){
		this.tasks = tasks;
	}

	dump(){
		console.log(this.tasks);
	}
}

export let foo = 'bar';

export function myFunc(){
	return {foo};
};

// exports at the end
export default TaskCollection;