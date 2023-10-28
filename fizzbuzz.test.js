const fizzbuzz = require('./fizzbuzz.js');

describe("fizzbuzz", () => {
    test("should print 1 if they recive 1", () => {
        const expected = 1;
        const result= fizzbuzz(1);

        expect(expected).toBe(result);
    });

    test("should print fizz if they recive 3", () => {
        const expected = 'fizz';
        const result= fizzbuzz(3);

        expect(expected).toBe(result);
    });

    test("should print fizz if they recive a multiple of 3", () => {
        const expected = 'fizz';
        const result= fizzbuzz(6);
        expect(expected).toBe(result);
    });

    test("should print buzz if they recive a multiple of 5", () => {
        const expected = 'buzz';
        const result= fizzbuzz(5);
        expect(expected).toBe(result);
    });

    test("should print buzz if they recive a multiple of 3 and 5", () => {
        const expected = 'fizzbuzz';
        const result= fizzbuzz(15);
        expect(expected).toBe(result);
    });

});