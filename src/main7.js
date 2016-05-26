// ES6 Modules import
// import {TaskCollection, foo, myFunc} from './TaskCollection';
// or because TaskCollection
import TaskCollection, {myFunc} from './TaskCollection';

new TaskCollection(['Eat', 'Sleep', 'Rave', 'Repeat']).dump();
console.log(myFunc());