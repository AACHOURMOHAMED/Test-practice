const capitalize= require('./index')
const stringLength = require('./index')
const Calculator = require('./index')
const reverse = require('./index')
test('',()=>{
    expect(capitalize("javascript")).toBe("Javascript");
})

test('',()=>{
    expect(capitalize("mohamed")).toBe("Mohamed");
})

test('',()=>{
    expect(capitalize("test")).toBe("Test");
})


test('',()=>{
    expect(reverse("javascript")).toBe("tpircsavaj");
})

test('',()=>{
    expect(reverse("mohamed")).toBe("demahom");
})

test('',()=>{
    expect(reverse("test")).toBe("tset");
})


test('The result should be 7', () => {
    expect(stringLength('mohamed')).toBe(7);
})

test('should be more than 1', () => {
    expect(() => {stringLength('')}).toThrow();
})


describe('additions', () => {
    test('is adding', () => {
        expect(Calculator.add(22, 31)).toBe(53);
    });
    test('is adding', () => {
        expect(Calculator.add(12, 2)).toBe(14);
    });
    test('is adding', () => {
        expect(Calculator.add(1, 10)).toBe(11);
    });
});

describe('subtractions', () => {
    it('is subtracting', () => {
        expect(Calculator.subtract(22, 31)).toBe(-9);
    });
    it('is subtracting', () => {
        expect(Calculator.subtract(12, 2)).toBe(10);
    });
    it('is subtracting', () => {
        expect(Calculator.subtract(1, 10)).toBe(-9);
    });
});

describe('divisions', () => {
    it('is dividing', () => {
        expect(Calculator.divide(22, 2)).toBe(11);
    });
    it('is dividing', () => {
        expect(Calculator.divide(12, 4)).toBe(3);
    });
    it('is dividing', () => {
        expect(Calculator.divide(100, 10)).toBe(10);
    });
});

describe('multiplications', () => {
    test('is multiplying', () => {
        expect(Calculator.multiply(22, 31)).toBe(682);
    });
    test('is multiplying', () => {
        expect(Calculator.multiply(12, 2)).toBe(24);
    });
    test('is multiplying', () => {
        expect(Calculator.multiply(1, 10)).toBe(10);
    });
});