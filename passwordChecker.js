function checkPassword(password) {
    if (password.length < 8) {
        return false;
    }
    return true;
}

module.exports = { checkPassword };
