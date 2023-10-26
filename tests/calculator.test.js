import { Calculator } from "../scripts/calculator";

const calc = new Calculator();

describe('Adds two numbers', () => {

    it('Adds two positive numbers', () => {
        expect(calc.add(1, 2)).toBe(3);
    })
    
    it('Adds two negative numbers', () => {
        expect(calc.add(-1, -2)).toBe(-3);
    })

    it('Adds two floating point decimals', () => {
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
})

