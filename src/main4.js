// HTML templates before:
let name = 'John Wall';
let template1 = '<div class="col-md-12">' +
    				'<p>' + name + '</p>' +
				'</div>';
console.log(template1);

let template2 = [
	'<div class="col-md-12">',
		'<p>' + name + '</p>',
	'</div>'
].join('');
console.log(template1);

// now with ES6 it could look more like this:
let template = `
	<div class="col-md-12">
    	<p>${name}</p>
	</div>
`;
// no more weird arrays and concatenations!
// additionally our HTML code is formatted as looks better
console.log(template);