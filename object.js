// Primitive data types in JavaScript are basic, immutable values like numbers and strings, 
// while non-primitive data types, like objects and arrays, are more complex and mutable.

// Primitive data = Primitive means they are predefined or immutable 
// eg : String , Number, Boolean,undefined,null;

// Non_primitive data = means they are not predefined or mutable
// eg : Object , Array ;
// onject =  Everything is in jvascript is an object , object is a collection of properties.

//Project  :  


// let user = {
//     name : "trupti",
//     age : 20
// }
// console.log(user.name);
// console.log(user.age);
// // console.log(Object.keys(user));
//  User.city = "delhi";
// console.log(User);

// let user = {
//     name : "trupti",
//     age : 20,
//     email_id: "truptibhojane22@navgurukul.org"
// }
// // delete user["email_id"];
// // console.log(user);
// console.log(user.email_id);


// let fname= "puja";
// let user = {
//     name : "trupti",
//     age : 20,
//     [fname] : "trupti"
// }
//   console.log(user);
// console.log(user.puja);
// console.log(user.fname);


//  let fruit = "apple";
// let bag ={};
// bag[fruit]=5;
// console.log(bag);

// let bag ={};
// bag["fruit"]=5;
// bag.fruit = 5;
// console.log(bag);

// let bag = {
//     fruit :3,
// }

//  bag.fruit=5;
// console.log(bag);

// let fruit = "apple";
// let bag ={
//     [fruit + "computer"]:5,
// }
// console.log(bag);
// console.log(bag.applecomputer);

// function makeuser(name,age){
//     return{
//          name:name,
//          age:age,
//     }
// }

// let user = makeuser("akla",20);
// console.log(user);

// function makeuser(name,age){
//     return{
//          name,
//          age,
//     }
// }

// let user = makeuser("akla",20);
// console.log(user);


// function userdetail(name,age){
//         return{
//              name,
//              age:age || 18,
//         }
//     }
    
    // let user = userdetail("akla",20);
    // console.log(user);
    
    // let user = userdetail("akla");
    // console.log(user);

// let obj={
//     1:"one",
// }
// console.log(obj);
// console.log(obj[1]);
// console.log(obj["1"]);

//............................ Object.assign().........................

// assign is used to merge a more onject
// let user = {a:1,b:2};
// let user1 = {b:3,c:4};


// let output = Object.assign(user1,user);
// console.log(output);
// console.log(user);
// console.log(user1);


// let output1 = Object.assign({},user,user1);
// console.log(output1);
// console.log(user);
// console.log(user1);

// let output1 = Object.assign({},user,user1);
// console.log(output1);
// let output2 = Object.assign({},user1,user);
// console.log(output2);


// let user1 = {a: 1, b: 2};
// let user2 = {b: 3, c: 4};
// let output = Object.assign(user1, user2);
// console.log(output);

// let output1 = Object.assign(user2, user1);
// console.log(output1);

// let output2 = Object.assign({}, user1, user2);
// console.log(output2);

// let output3 = Object.assign({}, user2, user1);
// console.log(output);


// const user ={ //all the keys in object are string.
//     name:'trupti',
//     age:20,
//     "my game":"batmintan",
// }
// console.log(typeof user);
// const key1= Object.keys(user);
// console.log(typeof key1[1],key1[1]);
//  console.log(typeof key1[0],key1[0]);



// function sayhi(){
//     // console.log("hello");
//     return 9;
// }
// console.log(typeof sayhi);
// console.log(typeof sayhi());

// const user ={ 
//         name:'trupti',
//         age:20,
//         "my game":"batmintan",
//     }

// user.age=16;
// user["my game"] ="cricket";
// // console.log("user",user);


// function printuser(user){
//     return user;
// }
// user.printingaser=printuser;
// console.log(user);
// // console.log(user.printingaser("puran"));

// .........................................Methods()....................................................

//Methods = methods in a object,methods are function that stored as object properties.


// const user = { 
//     name: 'trupti',
//     age: 20,
//     "my game": "badminton",
//     addition: function(a, b)  {
//         console.log(a + b);
//     },
//     subtraction (a, b) {
//         console.log(a - b);
//     },
//     multiply:(a,b) =>{
//         console.log(a*b);
//     },
//     greet (){           //comma dangle/trailing comma
//         console.log(this,inside method);
//         // console.log("good",this.name);
//     },
// };
// console.log(this);

// user.addition(2,3);
// user.subtraction(2,3);
// user.multiply(2,3);
// user.greet();

// const user = {
//     name:"puran",
//     sayhi:function(name="puran"){       //method
//         return `Hello,Good Morning ${name}`;
//     },
//     saybye(greet){                     //shorthand method
//       return `Hello,Good Night ${greet}`;
//     },
//     sayinspanish:(greet)=>{           // arrow methods
//         return `Hola ${greet}`;
//     }
// }

// console.log(user.sayhi);
// console.log(user.sayhi());
// console.log(user.saybye("See you Tomarrow"));
// console.log(sayinspanish("Mrs John"));
//...................................................this keyword.............................................

// const user = {
//     firstName: "Trupti",
//     lastName: "Bhojane",
//     fullName: function() {
//         // return this.firstName + " " + this.lastName;
//         return user.firstName + " " + user.lastName;

//     }
// };

// console.log(user.fullName());

// In short, the value of this inside a regular function in JavaScript depends on how the function is called:

// Global Context: this refers to the global object. or window
// Method: this refers to the object that owns the method.
// Constructor: this refers to the newly created instance of an object.
// Event Handlers: this typically refers to the element that triggered the event.

//..........................................this() keyword.............................................

//this - keyword
//this keyword  refers to a parent object.
//Arrow function does not have this keywords
// const user = {
//     name :"eram",
//     sayhi:function(){
//         console.log(this);
//         console.log(this.name);
//         console.log(this.name);
//     }
// }
// console.log(user.name);
// user.sayhi();

//hosting access
//arrow function reference error
// if you write a this keyword in method it refers a parent object.
// let a=10;
// let b= 20;
// b =10;
// console.log(a);
// console.log(b);

// let a = 10;
// let b= a;
// a =10;
// console.log(a);
// console.log(b);

// let a = 10;
// let b= a;
// a =20;
// console.log(a);
// console.log(b);

// let a = {
//     name:"punam",
// }


// let b = a;
// a.name="vaishnavi";

// console.log(a);
// console.log(b);







