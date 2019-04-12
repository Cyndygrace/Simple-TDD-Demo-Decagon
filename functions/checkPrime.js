function checkPrime(num) {
    if(!num) return false;
    if(num <= 1) return false;
    for(var i = 2; i < num; i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

module.exports = checkPrime;