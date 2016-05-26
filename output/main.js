'use strict';

var names = ['Taylor', 'Adam', 'Robert'];

// instead of this
// names = names.map(function(name){
// 	return name + ' is cool.';
// });

// we can use this
names = names.map(function (name) {
  return name + ' is cool.';
}); // template strings YAY

console.log(names);