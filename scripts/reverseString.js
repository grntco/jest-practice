export function reverseString(string) {
    if (!string) return undefined;

    return string.split('').reverse().join('');
}