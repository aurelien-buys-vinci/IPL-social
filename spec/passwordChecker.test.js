const { checkPassword } = require('../passwordChecker.js');

describe("list of test for minimum length of passwordChecker", function() {
    it("should return true if password is greater than 8 characters", function() {
        expect(checkPassword("12345678")).toBe(true);
    });
});