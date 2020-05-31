let { mirror } = require("../string-mirror.js");

describe("mirror()", () => {
	it("returns a 'string' type", () => {
		expect(mirror("some String")).toEqual(expect.any(String));
	});

	it("returns reversed string", () => {
		expect(mirror("some String")).toEqual("gnirtS emos");
	});
});
