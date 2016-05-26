'use strict';

// HTML templates before:
var name = 'John Wall';
var template1 = '<div class="col-md-12">' + '<p>' + name + '</p>' + '</div>';
console.log(template1);

var template2 = ['<div class="col-md-12">', '<p>' + name + '</p>', '</div>'].join('');
console.log(template1);

// now with ES6 it could look more like this:
var template = '\n\t<div class="col-md-12">\n    \t<p>' + name + '</p>\n\t</div>\n';
// no more weird arrays and concatenations!
// additionally our HTML code is formatted as looks better
console.log(template);