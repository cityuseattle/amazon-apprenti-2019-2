const animal = ['cat','dog'];
if(animal[0] === animal[1])
    console.log('A(n) ' + animal[0] + ' is a(n) ' + animal[1]);
else
{
    console.log('A(n) ' + animal[0] + ' is not a(n) ' + animal[1]);

}

for(let i = 0; i < 5; i++)
{
    var a = 'test a';
    var b = 'test b';
    console.log(i);
}
console.log(a);
console.log(b); //my script ran with this uncommented without error

for(let i=0; i < 3; i++)
{
    let j: string;
    for(j = 'x'; j.length < 5; j+='x');
    console.log(j);
}