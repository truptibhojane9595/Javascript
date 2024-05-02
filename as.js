//string comparision
// console.log("Z" > "A");
// console.log("A" > "B");
// console.log("Priyanka " > "Punam");
//  console.log("mee" > "me");
//  console.log("Priya " > "Priyanka");
//  console.log("a" > "A");
// console.log("2" > 1);
// console.log("01" == 1);
// console.log(true > 0);
// console.log(false >  0);
//  console.log(true == 1);
// console.log("A" > 0); // string not compare to num
// console.log("56" > 0) // string convert into num after that compare
// console.log(Boolean("0"));
// console.log(Boolean(0));
// console.log(null == undefined);
// console.log(null === undefined);
// console.log( undefined == 0); //undefined only  compare with null not any other
// console.log( undefined > 0);
// console.log( undefined < 0);/string comparision
// console.log("Z" > "A");
// console.log("A" > "B");
// console.log("Priyanka " > "Punam");
//  console.log("mee" > "me");
//  console.log("Priya " > "Priyanka");
//  console.log("a" > "A");
// console.log("2" > 1);
// console.log("01" == 1);
// console.log(true > 0);
//console.log(false >  0);
// console.log(true == 1);
// console.log("A" > 0); // string not compare to num
// console.log("56" > 0) // string convert into num after that compare
// console.log(Boolean("0"));
// console.log(Boolean(0));
// console.log(null == undefined);
// console.log(null === undefined);
// console.log( undefined == 0); //undefined only  compare with null not any other
// console.log( undefined > 0);
// console.log( undefined < 0);

// let a = 20;
// let b = 3;
// let quotient = a/b;
// console.log(`quotient : ${quotient}`);
// let module1 = a%b;
// console.log(`module:${module1}`);
// console.log(`integent part :${quotient-module1/b}`);


// let num = 10_000_567;
// console.log(num);
// let num = 1e7;
// console.log(num);

// let num1= 23e5;
// let num = 2.3e6;
// console.log(num1);
// console.log(num);

// let num = 56_000_000_000;
// let num = 5.6e10;
// console.log(num);

// let num = 0.02;
// let num1 = 2e-2;
// console.log(num);
// console.log(num1);

// let num = 1.23e3;
// console.log(num);
                //    ....................math mathod...............
// //Math.floor
// console.log(Math.floor(3.1));// down to the nearest value 
// console.log(Math.floor(-3.1));

// //Math.ceil
// console.log(Math.ceil(3.1));// up th  nearest larger  value 
// console.log(Math.ceil(-3.1));

// Math.round - round to the nearest integer 
// 1 to 4 = round down to the nearesst integer 
// 5 to 9 = round up to the nearest integer 
// console.log(Math.round(3.2));
// console.log(Math.round(3.9));
// console.log(Math.round(-3.2));
// console.log(Math.round(-3.9));

// tofixed 
// let num = 3.149;
// console.log(num.toFixed(2));
// console.log(num.toFixed(0));
// console.log(num.toFixed(1));

// isNaN() = check this is NaN
// console.log(isNaN((NaN)));
// console.log(isNaN("10"));
// console.log(isNaN(10));
//console.log(isNaN("10hello"));

// isFinite = check if the value is infinite number
// console.log(isFinite(10));
// console.log(isFinite(10.1234567));
// console.log(isFinite("hello"));
// console.log(isFinite("10hello"));

// Math.random() = gives any random value 
// console.log(Math.random(10));
// console.log(parseInt(Math.random(10)));

// math.pow = return the power 
// console.log(Math.pow(3,2));
// console.log(Math.pow(3,0));
// console.log(Math.pow(3,0.5));
// console.log(Math.pow(3,1/2));
// console.log(Math.pow(3,-2));
// console.log(Math.pow(2,-2));

// Math.sqrt() = gives a sqrt root 
// console.log(Math.sqrt(4));
// console.log(1+true);

// function foo(){
//     let x=10;
//     if(true){
//         let x=20;
//     }
//     console.log(x);
// }
// foo();

// console.log(Boolean(" "));
// console.log("B"+"a"++"a"+"a");

// var x=1;
// function fooo(){
//     var x=2;
//     console.log(x);
// }
// fooo()
// console.log(x);
// function greet(city){
//     console.log("i belong to"+city);
// }
// greet()

// console.log(NaN === NaN);
// let a = [1,2,3,4,5];
// console.log(a.slice(2,4));
// console.log(typeof(NaN));
// console.log("1"--"1");

// let x =5;
// let y = x++;
// console.log(y);
// console.log(Math.round(7.5));
// nullish coaliching operator
// result of a ?? b is:
// a : if a is define then a ,
// b : if a is undefined then b,

// let a = undefined;
// console.log(a ??  "hello");

// let a;
// console.log(a ??  "hello");

// let a = "";
// console.log(a ??  "hello");
// console.log(a ||  "hello");


// let a = null;
// console.log(a ??  "hello");
// console.log(a ||  "hello");



// let a = 5;
// console.log(a ??  "hello");
// console.log(a ||  "hello");


// let b = undefined;
// console.log(a ??  "hello");
// console.log(a ||  "hello");


// let firstname;
// let lastname;
// let nickname = "super";
// console.log( firstname ?? lastname ?? nickname ?? "salman");

// let h = 0;
// console.log(h ?? 100);
// console.log(h || 100);

// let height = 10;
// let width;
// let area = (height ?? 100) * (width ?? 50);
// console.log(area);


// let height ;
// let width = 10;
// let area = (height ?? 100) * (50 ?? width);
// console.log(area); // code will be run left to right


// falsy values
// console.log(Boolean(false));      // false
// console.log(Boolean(0));          // false
// console.log(Boolean(""));         // false
// console.log(Boolean(null));       // false
// console.log(Boolean(undefined));  // false
// console.log(Boolean(NaN));        // false

// // Everything else is truthy
// console.log(Boolean(true));       // true
// console.log(Boolean(1));          // true
// console.log(Boolean("Hello"));    // true
// console.log(Boolean({}));         // true
// console.log(Boolean([]));         // true

//string comparision
// console.log("Z" > "A");
// console.log("A" > "B");
// console.log("Priyanka " > "Punam");
//  console.log("mee" > "me");
//  console.log("Priya " > "Priyanka");
//  console.log("a" > "A");
// console.log("2" > 1);
// console.log("01" == 1);
// console.log(true > 0);
//console.log(false >  0);
// console.log(true == 1);
// console.log("A" > 0); // string not compare to num
// console.log("56" > 0) // string convert into num after that compare
// console.log(Boolean("0"));
// console.log(Boolean(0));
// console.log(null == undefined);
// console.log(null === undefined);
// console.log( undefined == 0); //undefined only  compare with null not any other
// console.log( undefined > 0);
//  console.log( undefined < 0);

// function swap (){
//     let temp = a;
//     a = b;
//     b = temp;
//     return [a,b];
// }
// let a = 10;
// let b = 30;
// console.log(swap(a,b));