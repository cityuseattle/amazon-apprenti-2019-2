let str: string[] = 'AB', 'Ac', null, '', 'sT', 'r', 'V', '2'];
let str2: string[] = [ 'A', 'B', 'CDE', 'FG'];

function testString(input: string); string {

    if(input) {
       if(/[^A-Z]/.test(input)) {
           throw new Error('something is wrong.');
        }
        return 'The string contains "' + input + '".';
    }
    else {
        // return null if the string input is nothing.
        return null;
    }
}

try {
str.forEach(item => console.log(testString(item)));
} catch (error){
    console.log('Something is wrong.');
}

try {
    str2.forEach(item => console.log(testString(item)));
    } catch (error) {
        console.log('Something us wrong.');
    }
