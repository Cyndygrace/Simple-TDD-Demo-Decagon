const reverse = require('../functions/reverse');

test("that an array of lost, not, is, hope, all outputs all, hope, is, not, lost", () =>{

    expect(reverse(["lost", "not", "is", "hope", "all"])).toEqual(["all", "hope", "is", "not", "lost"])

});

test("that an array of 1, 2, 3, 4, 5 outputs 5, 4, 3, 2, 1", () =>{

    expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1])

});