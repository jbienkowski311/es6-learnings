'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Before ES6
function OldUser(username, email) {
	this.username = username;
	this.email = email;

	this.changeEmail = function (newEmail) {
		this.email = newEmail;
	};
}

// or with prototype
OldUser.prototype.changeEmailWithPrototype = function (newEmail) {
	this.email = newEmail;
};

var oldUser = new OldUser('User', 'user@email.com');
oldUser.changeEmailWithPrototype('foo@bar.xyz');

console.dir(oldUser);

// ES6 code:
var NewUser = function () {
	function NewUser(username, email) {
		_classCallCheck(this, NewUser);

		this.username = username;
		this.email = email;
	}

	// static methods


	_createClass(NewUser, [{
		key: 'changeEmail',


		// this method is automagically created as a prototype
		value: function changeEmail(newEmail) {
			this.email = newEmail;
		}
	}, {
		key: 'name',
		get: function get() {
			return 'Name: ' + this.name;
		}
	}, {
		key: 'username',
		set: function set(newUsername) {
			this.username = newUsername;
		}
	}], [{
		key: 'register',
		value: function register() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return new (Function.prototype.bind.apply(NewUser, [null].concat(args)))();
		}
	}]);

	return NewUser;
}();

var newUser = NewUser.register('User', 'user@email.com');
newUser.changeEmail('foo@bar.xyz');
newUser.username = 'ChangedUser';
console.dir(newUser);
console.log(newUser.name);