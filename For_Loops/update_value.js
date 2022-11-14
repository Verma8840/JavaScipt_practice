const salaries= {
    Virendra : 24000,
    Riyaj : 34000,
    Rajesh : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}