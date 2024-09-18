function receivesAFunction (cb){
    console.log(cb())
}
recivesAFunction(function () { return "Hello"})

function returnsANamedFunction (cb){
    console.log(cb())
}

function returnsANamedFunction (){
    return function returnsANamedFunction(){
        console.log("before all")
    }
}

function returnsAnAnonymousFunction (){
    return function(){
        
    }
}