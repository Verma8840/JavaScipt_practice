
//Use the destructuring syntax to store only the values of name, jobTitle and work properties to respective variables

const userActivity3 = { 
    name: "Virendra Verma", 
    jobTitle: "JS student@almabetter.com", 
    work: "virendra@microsoft.com", 
    region: "Hyderabad" 
  }

  
  const { name, jobTitle, work } = userActivity3;

  //console log all 3 variables together
  console.log(name, jobTitle, work);