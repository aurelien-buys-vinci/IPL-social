function checkPassword(password) {
    if (!isValidLength(password)) {
        return false;
    }
    if (!containsSpecialCharacter(password)) {
        return false;
    }
    return true;
}

function isValidLength(password) {
    return password.length >= 8;
}

function containsSpecialCharacter(password) {
    return /[^a-zA-Z0-9]/.test(password);
}

module.exports = { checkPassword, isValidLength, containsSpecialCharacter };
