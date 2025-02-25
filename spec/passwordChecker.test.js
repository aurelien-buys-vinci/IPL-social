const { checkPassword, isValidLength, containsSpecialCharacter, containsNumber, containsIPL } = require('../passwordChecker.js');

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
        expect(containsSpecialCharacter("12345678@")).toBe(true);
    });

    it("should return false if password has no special character", function() {
        expect(containsSpecialCharacter("12345678")).toBe(false);
    });

    it("should return true if password has more than one special character", function() {
        expect(containsSpecialCharacter("12345678@#")).toBe(true);
    });
});

describe("list of test for minimum one number passwordChecker", function() {
    it("should return true if password has one number", function() {
        expect(containsNumber("azertyu8")).toBe(true);
    });

    it("should return false if password has no number", function() {
        expect(containsNumber("azertyu")).toBe(false);
    });

    it("should return true if password has more than one number", function() {
        expect(containsNumber("azertyu89")).toBe(true);
    });
});

describe("list of test for password do not containt IPL passwordChecker", function() {
    it("should return true if password is not IPL", function() {
        expect(containsIPL("azertyu8")).toBe(true);
    });

    it("should return false if password is IPL", function() {
        expect(containsIPL("azertyuIPL")).toBe(false);
    });
});

describe("list of test for passwordChecker", function() {
    it("should return true if password is valid", function() {
        expect(checkPassword("azertyu8@")).toBe(true);
    });

    it("should return false if password is less than 8 characters", function() {
        expect(checkPassword("azertyu")).toBe(false);
    });
    it("should return false if password has no special character", function() {
        expect(checkPassword("azertyu8")).toBe(false);
    });
    it("should return false if password has no number", function() {
        expect(checkPassword("azertyu@")).toBe(false);
    });
    it("should return false if password is IPL", function() {
        expect(checkPassword("azertyuIPL")).toBe(false);
    });
});
            