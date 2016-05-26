// Create new Promise, the anonymous function inside is called immidiately
var timer = function(timeout){
	return new Promise(function(resolve, reject){
		console.log('Promise init!');

		if(timeout >= 5000){
			reject();
		}else{
			setTimeout(function(){
				console.log('Timer done.');
				// let promise continue
				resolve();
			}, timeout);
		}
	});
};

// Promise with successful callback
timer(2000).then(function(){
	console.log('Promise ended!');
});

// Promise with error
timer(5000).then(function(){
	console.log('Promise ended!');
}, function(err){
	console.log('Timeout is too long!');
});