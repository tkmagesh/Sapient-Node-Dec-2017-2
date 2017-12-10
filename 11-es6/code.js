1. let
2. const
3. default arguments
4. array destructuring
5. rest operator
6. object destructuring
7. spread operator
8. arrow functions
9. template strings
10. class


function add(...args){
	function parseArg(n){
		if (typeof n === 'function') return parseArg(n());
		if (Array.isArray(n)) return add(...n);
		return isNaN(n) ? 0 : parseInt(n, 10);
    }
	return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + add(args.slice(1));
}

create a spinner object that has only two methods 'up' and 'down'

var spinner = ....
spinner.up() //=> 1  
spinner.up() //=> 2
spinner.up() //=> 3


spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1


function spinnerFactory(){
	var counter = 0;
	return {
		up : function(){
			return ++counter;
		},
		down : function(){
			return --counter;
		}
	}
}
var spinner = spinnerFactory();

function Spinner(){
	var counter = 0;
	this.up = function(){
		return ++counter;
	};
	this.down = function(){
		return --counter;
	}
}

var spinner = new Spinner();


var Spinner = (function(){

	var counterSymbol = 'mystring';

	function Spinner(){
		this[counterSymbol] = 0;
	}
	Spinner.prototype.up = function(){
		return ++this[counterSymbol];
	};
	Spinner.prototype.down = function(){
		return --this[counterSymbol];
	}
	return Spinner;
})();





