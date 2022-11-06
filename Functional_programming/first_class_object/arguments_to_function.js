// pass as an argument to a function
//Return from a function

function functionReturner(fn) {
    return fn;
}

var chat = functionReturner(talk);
chat("Good Morning");

//logs "Good Morning"