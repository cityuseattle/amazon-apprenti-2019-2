function doSomething(action, objStr) {
    console.log(action, (objStr || "nothing") + '.');
}
function printSomething(noun, times) {
    if (times === void 0) { times = 5; }
    for (var i = 0; i < times; i++) {
        console.log(noun);
    }
}
doSomething('Read');
doSomething('Read', "a book");
printSomething("Car");
printSomething("Carpet", 3);
