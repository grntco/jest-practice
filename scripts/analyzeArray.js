export function analyzeArray(values) {
    const object = {}

    if (values === undefined) return object;

    object.average = _findAverage(values);
    object.min = Math.min(...values),
    object.max = Math.max(...values),
    object.length = values.length;

    function _findAverage(array) {
        const sum = array.reduce((prev, temp) => prev + temp, 0);
        return Math.floor(sum / array.length);
    }

    return object;
}