function doSomething(action: string, objStr?: string) 
{
    console.log(action, (objStr || "nothing") + '.');
}

function printSomething(noun: string, times: number = 5)
{
    for ( let i = 0; i < times; i++) 
    {
    console.log(noun);
    }
}

doSomething('Read');
doSomething('Read', "a book");
printSomething("Car");
printSomething("Carpet", 3);
