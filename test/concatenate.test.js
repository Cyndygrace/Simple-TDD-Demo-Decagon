const concatenate = require('../functions/concatenate');

test("that add three strings i.e coding + is + fun output coding is fun ", () =>{

    expect(concatenate("coding", "is", "fun")).toBe("coding is fun")

});

test("that add three strings i.e  a + big + house output a big house ", () =>{

    expect(concatenate("a", "big", "house")).toBe("a big house")

});