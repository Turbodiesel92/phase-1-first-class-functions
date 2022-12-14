function receivesAFunction(newFunction) {
    newFunction();
}
function callFunction() {
    console.log('The callback')
}
receivesAFunction(callFunction)


function returnsANamedFunction() {
    return waste
}
function waste(){

}
returnsANamedFunction(waste)


function returnsAnAnonymousFunction() {
    return function(){

    }
}