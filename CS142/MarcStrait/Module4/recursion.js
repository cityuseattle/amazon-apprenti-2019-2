function power(base, exponent) {
    if (exponent === 0) { // base case
        return 1;
    }
    else if (exponent < 0) { // Error Handling
        throw new Error('Exponent small than zero');
    }
    else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(5, 3));
