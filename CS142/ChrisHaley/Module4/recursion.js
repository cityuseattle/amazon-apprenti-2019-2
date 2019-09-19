function power(base, exponent) {
    if (exponent === 0) {
        return 1; //base case
    }
    else if (exponent < 0) { //Error handling
        throw new Error('Exponent smaller than zero');
    }
    else {
        return base * power(base, exponent - 1);
    }
}
console.log(power(5, 3));
