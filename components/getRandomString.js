 function getRandomEmail() {
    
    const chars = "abcdefghijklmnopqrstuvwxyz";
    function getRandomString(length) {
        let result = ''
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return result
    }
    const emailLength = Math.floor(Math.random() * 10) + 6;
    const username = getRandomString(emailLength);
    return username;
}

module.exports = { getRandomEmail }