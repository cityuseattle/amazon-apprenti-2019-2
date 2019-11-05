var makePromise = (action: string) => {
    return new Promise(function(resolve, reject) {
        if(action === 'Study') {
            resolve('Good job');
        } else {
            reject('Study harder');
        }
    });
};

const checkPromise = (theAction: string) => makePromise(theAction).then(
    function(resolve) {
        console.log(resolve);
    }, function (reject) {
        console.log(reject);
    }
)

var theAction = 'Skip class';
checkPromise(theAction);

theAction = 'Study';

checkPromise(theAction);