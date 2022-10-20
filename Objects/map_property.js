const fruits = new Map([
    ["apples",500],
]);


//The set() method can also be used to change existing Map values:
fruits.set("apples", 500);

//The get() method gets the value of a key in a Map:
fruits.get("apples");    // Returns 50

//The delete() method removes a Map element:
fruits.delete("apples");

//The clear() method removes all the elements from a Map:
fruits.clear();

//The has() method returns true if a key exists in a Map:
fruits.has("apples");

