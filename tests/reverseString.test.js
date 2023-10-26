import { reverseString } from "../scripts/reverseString";

describe('Reverse a string', () => {
    it('Is undefined', () => {
        expect(reverseString()).toBeUndefined();
    });

    it('Reverse name', () => {
        expect(reverseString('Sherlock')).toBe('kcolrehS');
    });
});

