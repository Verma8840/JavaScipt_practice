//Function definition and invocation

function speak(string) {
    console.log(speak);
}

speak("Hello");             //logs "Hello"

//store in a variable
var talk = speak;
talk("Hi");             //logs "Hi"

//Owns properties
talk.myProperty = "bananas";
console.log(talk.myProperty);

//"bananas"