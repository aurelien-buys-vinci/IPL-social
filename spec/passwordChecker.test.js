const { checkPassword, isValidLength } = require('../passwordChecker.js');

describe("list of test for minimum length of passwordChecker", function() {
    it("should return true if password is greater than 8 characters", function() {
        expect(isValidLength("12345678")).toBe(true);
    });

    it("should return false if password is less than 8 characters", function() {
        expect(isValidLength("1234567")).toBe(false);
    });

    it("should return true if password is more than 8 characters", function() {
        expect(isValidLength("123456789")).toBe(true);
    });
});

describe("list of test for minimum one special character passwordChecker", function() {
    it("should return true if password has one special character", function() {
        expect(checkPassword("12345678@")).toBe(true);
    });

    it("should return false if password has no special character", function() {
        expect(checkPassword("12345678")).toBe(false);
    });

    it("should return true if password has more than one special character", function() {
        expect(checkPassword("12345678@#")).toBe(true);
    });
});
            