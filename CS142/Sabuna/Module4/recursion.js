function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else if (exponent < 0) {
        throw new Error('Exponent smaller than zero');
    }
    else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(5, 3));
