import { analyzeArray } from "../scripts/analyzeArray";

const testArray = [1, 8, 3, 4, 2, 6]

describe('Returns object with correct properties', () => {
    it('Returns an object', () => {
        expect(typeof analyzeArray(testArray)).toBe('object')
    })

    it('No array of values provided: returns an empty object', () => {
        expect(analyzeArray()).toEqual({})
    }) 

    it('Finds the average of the array values', () => {
        expect(analyzeArray(testArray).average).toBe(4);
    })

    it('Finds the min value', () => {
        expect(analyzeArray(testArray).min).toBe(1);
    })
    
    it('Finds the max value', () => {
        expect(analyzeArray(testArray).max).toBe(8);
    })

    it('Finds the length of the array', () => {
        expect(analyzeArray(testArray).length).toBe(6);
    })

    it('Returns an object with the correct properties and values', () => {
        expect(analyzeArray(testArray)).toEqual({average: 4, min: 1, max: 8, length: 6})
    })
});