var makePromise = (action) => {
    return new Promise(function (resolve, reject) {
        if (action === 'Study') {
            resolve('Good job!');
        }
        else {
            reject('Study harder.');
        }
    });
};
const checkpromise = (theAction) => makePromise(theAction).then(function (resolve) {
    console.log(resolve);
}, function (reject) {
    console.log(reject);
});
var theAction = 'Skip class';
checkpromise(theAction);
theAction = 'Study';
checkpromise(theAction);