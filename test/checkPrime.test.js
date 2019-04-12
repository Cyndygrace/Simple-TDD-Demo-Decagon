const checkPrime = require('../functions/checkPrime');

test("that if 2 is a prime number, output true", () =>{

    expect(checkPrime(2)).toBe(true)

});

test("that if 0 is a prime number, output false", () =>{

    expect(checkPrime(0)).toBe(false)

});