// fib.js
// Calculate Fibonacci numbers in JavaScript
//
// vim: ft=javascript sw=4 ts=4
//

var BigInt = require('BigInt');

// naive & efficient (BigInt) implementation
function _fib_naive (n) {
	return (n < 2)? n : arguments.callee(n-1) + arguments.callee(n-2);
}

export function fib_naive (n) {
	return new Promise(function (resolve, reject) {
		let result = _fib_naive(n);
		resolve(result);
	})
}

export function fib (n) {
	return new Promise((resolve, reject) => {
		const res = function(n, a, b) {
			return (n === 0)? a : arguments.callee(n-1, b, BigInt.add(a, b));
		}(n, new BigInt.int2bigInt(0, 32), new BigInt.int2bigInt(1, 32));
		resolve(res);
	});
}

// exports
//export { fib_naive, fib };
exports.fib_naive = fib_naive;
exports.fib = fib;
