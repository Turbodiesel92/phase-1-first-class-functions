function receivesAFunction(newFunction) {
    newFunction()
}
function CallFunction() {
    console.log('The callback')
}

function returnsANamedFunction () {
    return waste
}
function waste() {

}
returnsANamedFunction(waste)

function returnsAnAnonymousFunction() {
    return function() {

    }
}