/*Input:
const cat = new Animals('Billi', 'Cat')

Output:
Billi can sing
*/



class Animals {
    constructor(name,specie) {
        this.name;
        this.specie;
    };

    sing(){
        console.log(`${this.name} can sing`);
    }
};

const cat = new Animals('Billi','Cat');

cat.sing();