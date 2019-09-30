function power(base, exponent) {
    if (exponent === 0) { // base case
        return 1;
    }
    else if (exponent < 0) { // Error Handling
        throw new Error('Exponant smaller than zero');
    }
    else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(5, 3));
