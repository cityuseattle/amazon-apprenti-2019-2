// Make a promise
var makePromsie = (action: string) => {
    return new Promise(function ( resolve, reject) {
        if(action === 'study') {
            // If successful, resolve the Promise
            resolve('Good job!');
        } else {
            reject('Study harder.');
        }
    });
};

// Resuable function to check the promise
const checkPromise = ( theAction: string) => makePromise(theAction).then(
    function(resolve) {
    }, function (reject) {
        console.log(reject);
    }
);

// Check the promise 2nd time
theAction = 'Study';
checkPromise(theAction);