var animal = ['cat', 'dog'];
if (animal[0] === animal[1])
    console.log('A(n) ' + animal[0] + ' is a(n) ' + animal[1]);
else {
    console.log('A(n) ' + animal[0] + ' is not a(n) ' + animal[1]);
}
for (var i = 0; i < 5; i++) {
    var a = 'test a';
    var b = 'test b';
    console.log(i);
}
console.log(a);
//console.log(b);
for (var i = 0; i < 3; i++) {
    var j = void 0;
    for (j = 'x'; j.length < 5; j += 'x')
        ;
    console.log(j);
}
