let user = {
    name: "Virendra",
    age: 20,
  };
  
  for (let key in user) {
    console.log( key );  // name, age
    console.log( user[key] ); // Virendra, 20
  }