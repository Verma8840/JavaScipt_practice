const string = 'Hello hello hello';

//performing a replacement
const result1 = string.replace(/hello/,'world');
console.log(result1);

// performimg global replacement 
const result2 = string.replace(/hello/g, 'world');
console.log(result2)

//performing case-insensitive replacement
const result3 = string.replace(/hello/i,'world');
console.log(result3);

//performing global case insensitive replacement
const result4 = string.replace(/hello/gi,'world');
console.log(result4);