

//declaring variable;
let person = {name: 'John', JobTitle: 'Developer', email: 'almabetter.com',isVerified : false}

// perform crud object;
console.log(person.name)

//printing isVerified properties 
console.log(person.isVerified);

//changing properties
person.isVerified = true;
delete person.name;
person.firstName = 'John';
person.lastName = 'Snow';
console.log(person);


/*
output:

JobTitle: 'Developer',
  email: 'almabetter.com',
  isVerified: true,
  firstName: 'John',
  lastName: 'Snow'

*/