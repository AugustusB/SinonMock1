var Combat = function() {
};
	
Combat.prototype.attack = function(attacker, defender) {
	if(attacker.calculateHit(defender)) {
		defender.takeDamage(attacker.damage);
	}
}

var Character = function() {}
Character.prototype.calculateHit = function() {
	// ...
}
Character.prototype.takeDamage = function() {
	// ...
}

var mySUTSpy1 = {
	callCallback: function(cb) {
		cb();
	},
	callCallbackWithReturnValue : (cb) => cb(),
	callDependencyBetter : (dep) => dep.someMethod()
}

realCallback = () => 4

let myDep = {
	someMethod : () => 10
}


var mySUT2 = {}

mySUT2.fadeOutDiv = function(duration, callback) {
	$("#div1").fadeOut(duration, callback);
}

mySUT2.doSomething = function() {
	// do nothing
	throw "my exceptions"; 
}