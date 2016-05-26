// Before ES6
function OldUser(username, email){
	this.username = username;
	this.email = email;

	this.changeEmail = function(newEmail){
		this.email = newEmail;
	};
}

// or with prototype
OldUser.prototype.changeEmailWithPrototype = function(newEmail){
	this.email = newEmail;
};

var oldUser = new OldUser('User', 'user@email.com');
oldUser.changeEmailWithPrototype('foo@bar.xyz');

console.dir(oldUser);

// ES6 code:
class NewUser {
	constructor(username, email){
		this._username = username;
		this._email = email;
	}

	// static methods
	static register(...args){
		return new NewUser(...args);
	}

	// getters and setters
	get username(){
		return `Username: ${this._username}`;
	}

	set username(newUsername){
		this._username = newUsername;
	}

	// this method is automagically created as a prototype
	changeEmail(newEmail){
		this._email = newEmail;
	}
}

let newUser = NewUser.register('User', 'user@email.com');
newUser.changeEmail('foo@bar.xyz');
newUser.username = 'ChangedUser';
console.dir(newUser);
console.log(newUser.username);