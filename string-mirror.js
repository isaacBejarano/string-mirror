// 1. INPUT - given string
let sample = "Lorem Ipsum";

// 2.  ALGORITHM
function mirror(iterable) {
	let reversed = "";

	for (let i = 1; i <= iterable.length; i++) {
		reversed += iterable[iterable.length - i];
	}
	return reversed;
}

// 1. call
let mirrored = mirror(sample);

console.log(mirrored);

// JEST / unit test
module.exports = { mirror };
