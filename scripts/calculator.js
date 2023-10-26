class Calculator {
    add(a, b) {
        if (b === undefined) return a;
        if (a === null || b === null) return undefined;

        return a + b;
    }

    subtract(a, b) {
        if (b === undefined) return a;
        if (a === null || b === null) return undefined;

        return a - b;
    }

    divide(a, b) {
        if (b === undefined) return a;
        if (a === null || b === null) return undefined;

        return a / b;
    }

    multiply(a, b) {
        if (b == undefined) return a;
        if (a === null || b === null) return undefined;
        
        return a * b;
    }
}

export { Calculator };