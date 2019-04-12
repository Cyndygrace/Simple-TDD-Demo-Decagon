const add = require('../functions/add');

test("that 2 and 3 and 4 and 5 will output 14", () =>{

    expect(add([2, 3, 4, 5])).toEqual(14)

});