// first class object

//function definition and invocation
function speak(string) {
    console.log(string);
}

speak("Hello");             //logs "Hello"

//store in a variable
var talk = speak;
talk("Hi");            //logs "Hi"