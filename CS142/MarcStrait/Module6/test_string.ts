let str: string[] = [ 'AB', 'Ac', null, '', 'sT', 'r', 'V', '2'];
let str2: string[] = [ 'A', 'B', 'CDE', 'FG'];

fucntion testString(input: string): string {

    if(input) {
        if(/[^A-Z]/.test(input)) {
            throw new Error('Somthing is wrong.');
        }
        return 'The string contains "' + input + '".';
    }
    else {
        // retun null if the stirng input is nothing.
        return null;
    }
}

try {
    str.forEach(item => console.log(testString(item));)
} catch (error) {
    console.log('Something is wrong.');
}

try {
    str2.forEach(item=> console.log(testString(item)));
} catch (error) {
    console.log('Something is wrong.');
}
str.forEach(item => console.log(testString(item)));