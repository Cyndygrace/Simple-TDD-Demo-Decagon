const checkPrime = require('../functions/checkPrime');

test("that if 2 is a prime number, output true", () => {

    expect(checkPrime(2)).toBe(true)

});

test("that if 6 is a prime number, output false", () => {

    expect(checkPrime(6)).toBe(false)

});

test("that if 0 is a prime number, output false", () => {

    expect(checkPrime(0)).toBe(false)

});

test("that if 1 is a prime number, output false", () => {

    expect(checkPrime(1)).toBe(false)

});

test("that if no input is a prime number, output false", () => {

    expect(checkPrime()).toBe(false)

});