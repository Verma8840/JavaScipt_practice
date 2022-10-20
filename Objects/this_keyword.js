const person = {
    name: 'Virendra',
    age: 30,
    greet: function() {
        let surname = 'Verma';
        console.log('The name is' + ' ' + this.name + ' ' + surname); }
};

person.greet();