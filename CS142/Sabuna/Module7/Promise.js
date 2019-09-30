//make promise
var makePromise = (action) => {
    return new Promise(function (resolve, reject) {
        if (action === "Study") {
            //if successfyl resolve the promise
            resolve('Good Job!');
        }
        else {
            reject('Study HARDER.');
        }
    });
};
//reusable function to check the promise
const checkPromise = (theAction) => makePromise(theAction).then(function (resolve) {
    console.log(resolve);
}, function (reject) {
    console.log(reject);
});
var theAction = 'SKIP CLASS';
theAction = 'STUDY';
checkPromise(theAction);
