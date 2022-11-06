
const double = x => x * 2
const square = x => x * x


// Tradition approach
var output1 = double(2);
var output2 = square(output1);
console.log(output2);


// variant two
var output_final = square(double(2));
console.log(output_final);