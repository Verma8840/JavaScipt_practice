// Function definition and invocation
function speak(string) {
    console.log(string);
  }
  speak("Hello");                     // logs "Hello"
  
  // Store in a variable
  var talk = speak;
  talk("Hi");                         // logs "Hi"
  
  // Store in a data structure
  var myFuncs = [talk];
  myFuncs[0]("Good Afternoon");