export function caesarCipher(string, offset) {
    if (!offset) return string;

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const cipher = [];

    string.split('').forEach(char => {
        if (char.match(/[^\w]+/)) { // keep punctuation and spaces
            cipher.push(char)
        } else {
            const isCapitalized = char === char.toUpperCase();
            let newIndex = alphabet.indexOf(char.toLowerCase()) + offset;
            if (newIndex >= 26) newIndex -= 26; 

            const newChar = alphabet.at(newIndex);

            cipher.push(isCapitalized ? newChar.toUpperCase() : newChar);
        };
    });

    return cipher.join('');
}