import { Calculator } from "../scripts/calculator";

const calc = new Calculator();

describe('Adds two numbers', () => {

    it('Adds two positive numbers', () => {
        expect(calc.add(1, 2)).toBe(3);
    })
    
    it('Adds two negative numbers', () => {
        expect(calc.add(-1, -2)).toBe(-3);
    })

    it('Adds two floating point numbers', () => {
        expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3)
    })

    it('Only one number provided: returns that number', () => {
        expect(calc.add(5)).toBe(5);
    })

    it('No numbers provided: returns undefined', () => {
        expect(calc.add()).toBeUndefined();
    })

    it('Null as one argument: returns undefined', () => {
        expect(calc.add(null, 5)).toBeUndefined();
    })
});

describe('Subtracts two numbers', () => {
    it('Subtracts two positive numbers', () => {
        expect(calc.subtract(10, 5)).toBe(5);
    })

    it('Subtracts two negative numbers', () => {
        expect(calc.subtract(-10, -5)).toBe(-5);
    })

    it('Subtracts two floating point numbers', () => {
        expect(calc.subtract(0.3, 0.2)).toBeCloseTo(0.1)
    })

    it('Only one number provided: returns that number', () => {
        expect(calc.subtract(5)).toBe(5);
    })

    it('No numbers provided: returns undefined', () => {
        expect(calc.subtract()).toBeUndefined();
    })

    it('Null as one argument: returns undefined', () => {
        expect(calc.subtract(null, 5)).toBeUndefined();
    })
})

describe('Divides two numbers', () => {
    it('Divides two positive numbers', () => {
        expect(calc.divide(10, 5)).toBe(2);
    })

    it('Divides two negative numbers', () => {
        expect(calc.divide(-10, -5)).toBe(2);
    })

    it('Divides two floating point numbers', () => {
        expect(calc.divide(0.5, 0.2)).toBe(2.5)
    })

    it('Only one number provided: returns that number', () => {
        expect(calc.divide(5)).toBe(5);
    })

    it('No numbers provided: returns undefined', () => {
        expect(calc.divide()).toBeUndefined();
    })

    it('Null as one argument: returns undefined', () => {
        expect(calc.divide(null, 5)).toBeUndefined();
    })
})

describe('Multiply two numbers', () => {
    it('Multiplies two positive numbers', () => {
        expect(calc.multiply(10, 5)).toBe(50);
    })

    it('Multiplies two negative numbers', () => {
        expect(calc.multiply(-10, -5)).toBe(50);
    })

    it('Mulitplies two floating point numbers', () => {
        expect(calc.multiply(0.5, 0.2)).toBe(0.1)
    })

    it('Only one number provided: returns that number', () => {
        expect(calc.multiply(5)).toBe(5);
    })

    it('No numbers provided: returns undefined', () => {
        expect(calc.multiply()).toBeUndefined();
    })

    it('Null as one argument: returns undefined', () => {
        expect(calc.multiply(null, 5)).toBeUndefined();
    })
})