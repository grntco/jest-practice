import { caesarCipher } from "../scripts/caesarCipher";

describe('Converts a string into a Caesar Cipher', () => {
    
    it('Shifts forward 3 letters characters in alphabet', () => {
        expect(caesarCipher('apple', 3)).toBe('dssoh');
    });

    it(`Wraps around alphabet from 'z' to 'a'`, () => {
        expect(caesarCipher('zylophone', 3)).toBe('cborskrqh');
    })

    it('Shifts backward 3 letters characters in alphabet', () => {
        expect(caesarCipher('apple', -3)).toBe('xmmib');
    });

    it('Handles an offset of 13', () => {
        expect(caesarCipher('apple', 13)).toBe('nccyr');
    });

    it('Handles an offset of 25', () => {
        expect(caesarCipher('apple', 25)).toBe('zookd');
    });

    it('Keeps punctuation', () => {
        expect(caesarCipher('why?', 3)).toBe('zkb?')
    })

    it('Keeps spaces', () => {
        expect(caesarCipher('hello, world!', 3)).toBe('khoor, zruog!')
    })

    it('Keeps capitalization', () => {
        expect(caesarCipher('Look over THERE!', 3)).toBe('Orrn ryhu WKHUH!')
    })

    it('Translates full sentences', () => {
        expect(caesarCipher('The quick brown fox jumps over the lazy dog.', 3)).toBe('Wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj.')
    })

})