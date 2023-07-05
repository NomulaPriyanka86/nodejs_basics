// //It is a class we are exporting it and using it in app.js as importing it as a module.

class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    greeting()
    {
        console.log(`Namasthe ${this.name} age is ${this.age}`); 
    }
}
module.exports=Person;


// for setting and getting

// class Person{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     }
//     setName(setName)
//     {
//         this.name=setName;
//     }
//     getName()
//     {
//         return this.name;
//     }
   
// }
 
// const p1=new Person('priyanka',25);
// console.log(p1.setName('nomula'));
// console.log(Person);
// module.exports=Person;