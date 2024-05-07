//counter app
//in
//hasownproperty
//freeze
// loop-for in
// Question with loop
//reference value
//object.assign
//spread operator
//constructor finction

// const { values } = require("lodash");



// ...............................//counter app......................................

//create a object with 3 properties
//value
//increment
//decrement
//value will increse by +1 (increment()
//value will increse by -1 (decrement()


// const counterApp={
//     value:0,
//     increment(){
//         console.log(this.value = this.value+1);
//         // value = value+1;
//     },
//     decrement(){
//         console.log(this.value = this.value-1);
//         // value = value-1;
//     },
//     resizeTo(){
//         this.value =0;
//     }
// }
// console.log(counterApp.increment());
// console.log(counterApp.decrement());
// counterApp.increment();
// counterApp.decrement();
// counterApp.reset();

//.................................................Home Work..............................................
//snake game functionaly
//value=0;
// leader = value will increase by 10
//snake = value reset to 0;
// random = between 1 to 6 //6
// move = increment the value by random number

// const snakegame = {
//     value: 0,
//     ladder() {
//         return this.value = this.value + 10;
//     },
//     snake() {
//         return this.value = 0;
//     },
//     move() {
//         const random = Math.floor(Math.random() * 7);
//         console.log(random);
//         return this.value = this.value + random;
//     }
// };

// console.log(snakegame.ladder());

// .............................................................................................
// const object={
//     name:"alka",
//     age:20,
// }

// console.log("age" in object);
// console.log("location" in object);

//in check object and also prototypes deeply

// console.log(object.hasOwnProperty("location"));
// console.log(object.hasOwnProperty("tostring"));

// hasownpeoperty check only obj


//..................................object = Object.freeze()...........................

// const person={
//         name:"alka",
//         age:20,
//     }
// person.location="kanpur";
// person.job="developer";

// delete person.name;
// personalbar.name = "vaishnavi";
// console.log(person);


// const user={
//     name:"puran",
//     age : 20,
//     location:"delhi",
//     job:"developer",

// };
// Object.freeze(user);

// const keys = Object.keys(user);
// console.log(keys);
// const keys = Object.value(user);
// console.log(value);A

//..........................for - in loop............................
// const items={
//     apple:2,
//     orange:3,
//     mango:4,
// }
// console.log(items.orange);
// console.log(items);

// for(let keys in items){    
// console.log(keys);
// console.log(items[keys]);
// console.log(items[keys]*2);
// method ,key
// console.log(items.keys);  // ita give undefine because of let keys its declared variable

// }


// ............................................home work..................................

//create an object with 5 employe salary and 
// you have to increase the salary by 1000

// const employes={
//     employe1:1000,
//     employe2:2000,
//     employe3:3000,
//     employe4:4000,
//     employe5:5000,
// };

// for (let keys in employes){
//     console.log(employes[keys]+1000);
// }

// .................................premative ,non,premataive.......................

// pre = value 
// non-pre = Reference
// let a = 10;
// let b=a;
// b=20;
// console.log(a);
// console.log(b);

// let a = {
//     name:"punam",
// }
//  let b = a; //same memory location ,same variable
// a.name = "vaishnavi";
// console.log(a);
// console.log(b);


// let a = [3];
// let b = a;
// a[0]=4;
// console.log(a);
// console.log(b);   //not-pre  reference

// ....................... Object assign().....................

// let obj = {
//     name:"mahi",
//     age:25,
// }
// // Object.assign(target,source);  //{},obj
// let obj2={};
// Object.assign(obj2,obj);
// obj2.name = "virat";

// console.log(obj);
// console.log(obj2);

// shallow copy,1 level copy ,object.assign(),spread operator
// const renuka={
//     age :20,
//     nick:"nenu",
//     address:{
//         campus:"amaravati",
//         cash:{
//             inhand:1000,
//             inbank:20000,
//         }
//     }
// }

// const raj = Object.assign({},renuka);
// // const raj = {...renuka};
// raj.nick = "prince";
// raj.age = 22;
// raj.address.campus="dharmshala";
// raj.address.cash.inhand=5000;

// console.log(renuka);
// console.log(raj);


// // deep copy
//  let  { cloneDeep: structureClone } = require('lodash');


// const structureClone = require('lodash').cloneDeep;
// const renuka={
//     age :20,
//     nick:"nenu",
//     address:{
//         campus:"amaravati",

//         cash:{
//             inhand:1000,
//             inbank:20000,
//         }
//     },
//       sayhii(){
//          console.log("i am renuka");
//       }
// }

// // const raj = JSON.stringify(renuka);
// // console.log(typeof(raj));
// // const raj2 = JSON.parse(raj);
// // console.log(typeof(raj2));
// let raj2 = structureClone(renuka);
// raj2.nick = "prince";
// raj2.age = 21;
// raj2.address.campus="dharmshala";
// raj2.address.cash.inhand=5000;

// console.log(renuka);
// console.log(raj2);

// {
//     age: 20,
//     nick: 'nenu',
//     address: { campus: 'amaravati', cash: { inhand: 1000, inbank: 20000 } },
//     sayhii: [Function: sayhii]
//   }
//   {
//     age: 21,
//     nick: 'prince',
//     address: { campus: 'dharmshala', cash: { inhand: 5000, inbank: 20000 } }
//   }

//...............................................Home Work ..................................................
// let  { cloneDeep: structureClone } = require('lodash');
// const structuredClone= require ("lodash").cloneDeep;
// const renuka = {
//     age: 20,
//     nick: "nenu",
//     address: {
//         campus: "amaravati",
//         cash: {
//             inhand: 1000,
//             inbank: 20000,
//         },
//         education: {
//             gradution: 2023,
//             diploma: 2025,
//             job: "Softwere engineering",
//         }
//     },
//     sayhii() {
//         console.log("i am renuka");
//     },

// };

// const raj2 = structureClone(renuka);

// raj2.nick = "prince";
// raj2.age = 21;
// raj2.address.campus = "dharmshala";
// raj2.address.cash.inhand = 5000;
// raj2.address.education.gradution = 2021;
// raj2.address.education.diploma = 2024;
// raj2.address.education.job = "Employe"


// console.log(renuka);
// console.log(raj2);


// ...........................spread operator(...)...............

// let obj = {
//     name:"mahi",
//     age:25,
// }

// let obj2 = {...obj};
// console.log(obj);
// console.log(obj2);


//lodash = deep clone
// structuredClone()






// const obj1 = {
//     name:"puran",
//     age:20,
// }

// const obj3 ={
//     location:"bangal",
// }

// const obj2 = Object.assign({},obj1,obj3);   //target and source
// obj2.name = "aditi"
// console.log(obj1);
// console.log(obj2);


// //shallow copy = 
// only top level properties are copied 
// nested object are copied by Reference
// nested object are not copied,they are reference

//deep copy
//all property are copy





