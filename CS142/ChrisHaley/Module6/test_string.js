var str = ['AB', 'Ac', null, '', 'sT', 'r', 'V', '2'];
var str2 = ['A', 'B', 'CDE', 'FG'];
function testString(input) {
    if (input) {
        if (/[^A-Z]/.test(input)) {
            throw new Error('Something is wrong.');
        }
        return 'The string contains "' + input + '".';
    }
    else {
        return null; //do this when string input is nothing
    }
}
try {
    str.forEach(function (item) { return console.log(testString(item)); });
}
catch (error) {
    console.log('Something is wrong.');
}
try {
    str2.forEach(function (item) { return console.log(testString(item)); });
}
catch (error) {
    console.log('Something is wrong.');
}
//str.forEach(item => console.log(testString(item)));