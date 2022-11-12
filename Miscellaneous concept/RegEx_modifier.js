const string = 'Hello hello hello';

//performing a replacement
const result1 = string.replace(/hello/,'world');
console.log(result1);

//output Hello world hello

// performimg global replacement 
const result2 = string.replace(/hello/g, 'world');
console.log(result2)

// output - Hello world world

//performing case-insensitive replacement
const result3 = string.replace(/hello/i,'world');
console.log(result3);

//output - world hello hello

//performing global case insensitive replacement
const result4 = string.replace(/hello/gi,'world');
console.log(result4);

// output world world world