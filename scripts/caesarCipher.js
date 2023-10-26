export function caesarCipher(string, offset) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const array = string.split('');
    const cipher = [];

    array.forEach(char => {
        if (char.match(/[^\w]+/)) { // keep punctuation and spaces
            cipher.push(char)
        } else {
            let isCapitalized = false;
            if (char === char.toUpperCase()) {
                isCapitalized = true;
            }

            let newIndex = alphabet.indexOf(char.toLowerCase()) + offset;

            if (newIndex >= 26) {
                newIndex -= 26; 
            }

            const newChar = alphabet.at(newIndex);

            cipher.push(isCapitalized ? newChar.toUpperCase() : newChar);
        };
    });

    return cipher.join('');
}

// what about when offset is huge?