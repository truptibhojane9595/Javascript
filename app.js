// const cloneDeep = require("lodash/cloneDeep");
// const obj = {
//     name:"john",
//     age:30,
//     location:{
//         city:{
//             city1:"New york",
//             city2:"Los angeles",
//             city3:{
//                 city4:"chicago",
//                 city5:"houston",
//             }
//         }
//     },
//     sayhii(){
//         console.log("hello i am john");
//     }
// }

// const cloneobj = cloneDeep(obj);
// console.log(obj,"main-object");
// console.log(obj);
// cloneobj.name = "puran";
// clone.obj.location.city.city1="mumbai";
// cloneobj["location"]["city"]["city2"] = "Kolkata";

// cloneobj.sayBye = function(){
//     console.log("goood bye");
// }


// // function saybye(){
// //     console.log("bye bye");
// // }

// cloneobj.sayBye = saybye;
// console.log(cloneobj,d"deep copy object);

//............................................................................................................

// const student1 = {
//     name: "sangeeta",
//     age: 18,
// printdetail(){
//     console.log(`Hey, I am ${this.name} and I am ${this.age} year old`);
// }
// }

// const student2 = {
//     name: "sangeeta",
//     age: 80,
// }

// const student3 = {
//     name: "sangeeta",
//     age: 100,
// }

// console.log(student1);
// console.log(student2);
// console.log(student3);

//Dry Principle = Dont repeat yourself

// favtory function = function that return an object

// function createstudent(name,age){
//     return  {
//           name:name,
//           age:age,
//           printdetail(){
//             console.log(`Hey, I am ${this.name} and I am ${this.age} year old`);
//         }
//     }
// }
// let student1 = createstudent("Sangeeta",18);
// let student2 = createstudent("Nisha",80);
// let student3 = createstudent("Eram",100);

// student1.printdetail();
// student2.printdetail();
// student3.printdetail();

// let printing = {
//     printdetail() {
//         console.log(`Hey, I am ${this.name} and I am ${this.age} year old`);
//     }
// }

// let passout={
//     printpassout(){
//         console.log(  `Hey,I am ${name} and I am passout`);
//     }
// }

// function createstudent(name,age){
//     return  {
//           name:name,
//           age:age,
          
//     }
// }
// let student1 = createstudent("Sangeeta",18);
// let student2 = createstudent("Nisha",80);
// let student3 = createstudent("Eram",1);

// console.log(student1);
// console.log(student2);
// console.log(student3);

// student1.printdetail = printing.printdetail;
// student1.passout = passout.printpassout;
// student1.printdetail = printing.printdetail;

// console.log(student1);
// console.log(student2);
// console.log(student3)

// // student1.printdetail();
// // student2.printdetail();
// // student3.printdetail();

//......................................object.create()....................................
// Object.create() = its create a new object , using extisting object as a prototypes of the newly create object

// let printing = {
//     printdetail() {
//         console.log(`Hey, I am ${this.name} and I am ${this.age} year old`);
//     }
// }

// function createstudent(name,age){
//     let studentproto = Object.create(printing);
//     studentproto.name = name;
//     studentproto.age = age;

//     return studentproto;

// }

// let student1 = createstudent("sangeeta",18);
// let student2 = createstudent("Nisha",80);
//  let student3 = createstudent("Eram",1);

// console.log(student1);
// console.log(student2);
// console.log(student3);
