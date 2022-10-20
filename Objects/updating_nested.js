/*
Input:
const userDetails = { name: { first: "Rajesh", last: "saini", }, jobTitle: "JS vv0520273@gmail.com", email: { work: "vv0520273@gmail.com", personal: "", }, status: { isOnline: true, isVerified: false, } }

Output:
{ name: { first: 'Virendra', last: 'Verma' }, jobTitle: 'JS student@almabetter', email: { work: 'vv0520273@gmail.com', personal: '' }, status: { isOnline: true, isVerified: false }, isProMember: false }

 */


//object given here as the database object.
const userDetails = { name: { first: "Rajesh", last: "saini", }, jobTitle: "JS student", email: { work: "vv0520273@gmail.com", personal: "", }, status: { isOnline: true, isVerified: false, } }

//Update the userDetails object with your details
userDetails.name = {first: 'Virendra', last: 'Verma'};

//Add new status property isProMember to the new object and set it to false.
userDetails.isProMember = false;

//Resulting output
console.log(userDetails);