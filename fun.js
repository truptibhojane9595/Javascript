// function body
// function sayhello(){  
//     return "hello world"
// }
// let result = sayhello()
// console.log(result);

// function expression =  stored in a variable.
// let sayhello = function(){
//     return "hello world"
// }
// console.log(sayhello());

// Arrow function =
// let sayhello = ()=>{
//     return "Hello World!"; //explict return
// };

// let sayhello = ()=> "Hello World!";//implict return because remove return 

//what is anonymous function = doesent have any name

// //firxt class citizen = or first class object
// ...function can be stored in a variable
// ...function can be pass as an argument
// ...function can be returned from an argument
// ...function can be stored in an Object


//IOFE = immediately invoked function expression - self excuting function
// function sayhello(){
//     console.log("hello world");
// }

// (function (name){
//     console.log("hello",name);
// }("trupti"))

// (function(value){
//     console.log(value*3);
// }(5));

// //before ess release
// we cant use the arrow function
// so we use IIFE to create a function and call immediately.

// let name = () =>{
//     console.log("hello world");
// }
// name()

// // higher order funtion = a function take another function as an argument or return a function
// function callmyname(name){  //callback function
//     console.log(name);
// }
// function sayhello(func){   //higher oreder function
//      return func();
// }
// sayhello(callmyname("Trupti"));

// Higher-order function that takes a function as an argument
// function saySomething(sayFunction) {
//     return sayFunction();
// }

// // Function that we'll pass as an argument to the higher-order function
// function greet() {
//     return "Hello!";
// }

// // Calling the higher-order function with the greet function as an argument
// var result = saySomething(greet);
// console.log(result); // Output: "Hello!"


// //callback function
// a function that is passed as an argument to another function
// ans is excuted after some operation has been completed
//

//use of callback
// Asynchronous programming = is is a function that will excute the code after the specified time interval

// setTimeout( () =>{
//     console.log("hello")
// },5000);
 
