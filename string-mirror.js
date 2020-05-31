// ALGORITHM
function mirror(iterable) {
	let reversed = "";

	for (let i = 1; i <= iterable.length; i++) {
		reversed += iterable[iterable.length - i];
	}
	return reversed;
}

// TEST
// module.exports = { mirror };