// nested object
const student = {
    name:'Virendra',
    age:21,
    marks:{
        hindi:99,
        english:95,
        math:98,
    }
}

//accessing property of student object
console.log(student.marks);

//accessing property of marks object
console.log(student.marks.math); //98