// var = we can reassigne and redeclared the variable
// let  = we can reassigne the variable but not  redeclared the variable
// const   = we cannot reassigne the variable and   redeclared the variable

// FUNCTION
// syntax
// function functionname{
//     codeblock
// }

// function greet(){
//     console.log("hello");
// }
// greet();

// function greet(){
//     let fname = "john";
//     console.log('hello' + fname);
// }
// greet();
// console.log(fname);//frame not define because of fnme is in scope


 // function greet(){
//     let fname = "john";
//     console.log("hello" + fname);
// }
// greet()
//  console.log(fname);
// greet()


// let fname = "john";
// function greet(){
//     fname = "doe";
//     console.log("hello" + fname);
// }
// console.log(fname);
// greet()
// console.log(fname);



// let fname = "john";
// function greet(){
//     let fname = "doe";
//     console.log("hello" + fname);
// }
// console.log(fname);
// greet()
// console.log(fname);



// let fname="trupti";
// function sayhello ( ){
//     fname="vishakha" 
//     let msg = "hello  " + fname;
//     console.log(msg);
// }
// console.log(fname);
// sayhello();
// console.log(fname);



// function greet(namew){
//     console.log("hello" + namew);
// }
// greet("alka");
// greet(12);

// function greet(city){
//     console.log("I belongs to " + city);
// }
//  greet("pune");
//  greet();
//  greet("mumbai","pune");


// function greet(city,country){
//     console.log("I belongs to "+ city + " in "+country);
// }
// greet("pune","mumbai");
// greet("delhi");
// greet();
// greet(undefined,"mumbai");
// greet(" ","india");
//   greet( ,"india");


// function age(name,age){
//     console.log(name + " is " + age + " year old");
// }
// age("raj",20);

// function greet(name,age){
//     name= "hey" + name;
//     console.log(name + age);
// }
// let  name = "gayatri";
// greet(name,20);
// console.log(name);//it will modified the value but not affet in real value 



// function greet(name,age=22){
//     console.log("hello "+ name + " you are " + age + " year  old");
// }
// greet("gayatri",20);
// console.log();
// greet("niki",23);
// greet("eram",null);
// greet("eram",undefined);

// null vs undefined
// undefined vs not define

// function greet(city,country ){
//     if (country==undefined){
//         country ="india";
//     }
//     console.log("i belomg to"+ city + "in"+country);
// }
// // greet("mumbi","indi");
// greet("delhi");



// function greet(city, country) {
//     country = country || "india";
//     console.log("I belong to " + city + " in " + country);
// }

// greet("delhi");


//  function arry(arr){
//     console.log(arr);
//  }
//  arr([10,20,30,40,50]);


//  function arry(arr) {
//     for (let i = 0; i < myArray.length; i++) {
//         console.log(myArray[i]);
//     }
    
// }

// const myArray = [10, 20, 30, 40, 50];

// Printing each element using a for loop
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// function arry(arr) {
//     console.log(arr);
// }

// function printArrayElements(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// const myArray = [10, 20, 30, 40, 50];

// arry(myArray); // Prints the whole array
// printArrayElements(myArray); // Prints each element of the array

// let arr = [10, 20, 30, 40, 50];

// console.log("1"--"1");

// console.log(Boolean(" "));

// console.log("B"+"a"+"a"+"a");

// console.log("B" + "a" + "a" + "a");


// console.log(a);
// let a = "renu";
// in js every function treet as variable


// function scope(){
//     const a = 10;
//     console.log(a);
//     {
//         const a= 20;
//         console.log(a);
//     }
// }
// scope();

// function syhello(){   
//     if(true){
//         let a = 10;
//         console.log(a,"inside");
            
//         }
//         // console.log(a,"outside");
//     }
// syhello();
// console.log(a,"outside");

// let a = 20;
// {
//     var a= 10;
// }
// console.log(a);






































