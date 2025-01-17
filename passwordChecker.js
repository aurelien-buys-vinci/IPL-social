function checkPassword(password) {
    if (!isValidLength(password)) {
        return false;
    }
    if (!password.match(/[^a-zA-Z0-9]/)) {
        return false;
    }
    return true;
}

function isValidLength(password) {
    return password.length >= 8;
}

module.exports = { checkPassword, isValidLength };
