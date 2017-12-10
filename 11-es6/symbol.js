let counterSymbol = Symbol();

class Spinner{
	constructor(){
		this[counterSymbol] = 0;
	}
	up(){
		return ++this[counterSymbol];
	}
	down(){
		return --this[counterSymbol];
	}
}

module.exports = Spinner;