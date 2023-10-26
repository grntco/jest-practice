import { capitalize } from "../scripts/capitalize";

describe('Capitalize first letter of a string', () => {
    it('Is undefined', () => {
        expect(capitalize()).toBeUndefined();
    })

    it('Name', () => {
        expect(capitalize('sherlock')).toBe('Sherlock');
    });
});


