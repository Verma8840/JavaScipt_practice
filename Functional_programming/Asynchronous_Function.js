function speak (string) {
    console.log(string);
}


var delayedFunction = function(fn) {
    return function(val, delay) {
        setTimeout(function(){
            fn(val);
        }, delay);
    };
};

var delayedSpeak = delayedFunction(speak);
delayedSpeak("I'm late!", 1000);

//logs "I'm late" after a 1 second delay