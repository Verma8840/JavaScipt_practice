/*
Input:
var var1 = 50; var var2 = "42F";

Output:
50 is a valid number. 42F is not a number.
*/


var var1 = 50;
var var2 = "42F";

if(isNaN(var1)){
    console.log(var1+ " is not a number.")
}else {
    console.log(var1+ " is a valid number.")
}

if(isNaN(var2)){
    console.log(var2+ " is not a number.")
}else {
    console.log(var2+ " is a valid number.")
}