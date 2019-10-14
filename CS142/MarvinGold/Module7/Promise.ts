//Make A promise
var MakePromise = (action: string) => {
    return new Promise(function ( resolve, reject) {
        if(action === 'Study') {
            //if successful resolve the promise
            resolve('Good Job!');
        } else { reject('Study harder.');}
    });
};

// Reusable function to check the promise
const checkPromise = (theAction: string) => MakePromise(theAction).then(
    function(resolve) {
        console.log(resolve);
    }, function (reject) {
        console.log(reject);
    }
);

//Check the promise the 1st time
var theAction = 'Skip class';
checkPromise(theAction);

//check the promise the second time
theAction = 'Study';
checkPromise(theAction);
