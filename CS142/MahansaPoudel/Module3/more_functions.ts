// Optional Parameters
function dosomething(action: string, objStr?: string) {
  console.log(action, (objStr || "nothing") + ".");
}

dosomething("Read");
dosomething("Read", "a book");

function printSomething(noun: string, times: number = 5) {
  for (let i = 0; i < times; i++) {
    console.log(noun);
  }
}

printSomething("Car");
printSomething("Carpet", 3);
