var str = ['AB', 'Ac', null, '', 'sT', 'r', 'V', '2'];
var str2 = ['A', 'B', 'CDE', 'FG'];
fucntion;
testString(input, string);
string;
{
    if (input) {
        if (/[^A-Z]/.test(input)) {
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
str.forEach(function (item) { return console.log(testString(item)); });
