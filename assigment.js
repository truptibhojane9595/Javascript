// 1. Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
// let input = require("readline-sync");
// let a = input.questionInt("enter ")
// let a = 10;
// let b = 5;
// console.log("sum",a+b);
// console.log("difference",a-b);
// console.log("product",a%b);
// console.log("quotient",Math.floor(a/b));
// console.log("modules",a*b);


// 2. Take two numbers and only print the integer part when a is divided by b.
// let  a = 10;
// let b = 4;
// console.log("division part=",Math.floor(a/b));


// 3. Take two numbers a,b and print the exponential power of the first number raised by the second.
// let a = 5;
// let b = 2;
// console.log(Math.pow(a,b));

// 4. Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b.
// let a = 10;
// let b = 3;
// console.log("decimal part of division",a%b);

// 5. Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
// let A = 80;
// let B = 75;
// let C = 85;
// let D = 90;
// let E = 95;
// let sum = (A + B + C + D + E);
// let avg = sum/5;
// console.log("Average marks:", avg);

// 6. Take the cost price a and selling price b of a product, and print the profit obtained on the product.
// let cp = 100;
// let sp = 500;
// let profit = sp-cp;
// console.log(profit);

// 7. Take a number and print out the last digit of the number.
// let n = 12345;
// console.log("last digit",n % 10);

// 8. Take a 2 digit number and return the first and last digits.
// let number = 56;
// let firstDigit = Math.floor(number / 10);
// let lastDigit = number % 10;
// console.log("First digit:", firstDigit);
// console.log("Last digit:", lastDigit);

// 9. Write a JavaScript program to find the largest of three numbers.
// let p = 10;
// let q = 20;
// let r = 30;
// let largest = Math.max(p,q,r);
// console.log("largest = ",largest);

// 10. Write a JavaScript program to check whether a number is even or odd.
// let n = 10;
// if (n % 2 === 0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }

// 11. Write a JavaScript program to check whether a given number is prime or not.
// let n = 5;
// if (n%2 !== 0){
//     console.log("prime");
// }
// else{
//     console.log("not prime");
// }

// 12. Write a JavaScript program to convert temperature from Celsius to Fahrenheit and vice versa.
// let celsius = 37;
// let fahrenheit = (celsius * 9/5) + 32;
// console.log("fahrenheit = ",fahrenheit);


// 1. Write a program that checks if a given number is even or odd.
// function evenodd(num){
//     if(num % 2 ===0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }
// }
// console.log(evenodd(10));
// console.log(evenodd(9))


// //2. Create a function that takes two numbers as parameters and returns the larger one.
// function findLargerNumber(num1, num2) {
//     return Math.max(num1, num2);
// }

// console.log(findLargerNumber(5, 10)); 



//  3. Write a function that determines if a given year is a leap year.
// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }
// console.log(isLeapYear(2024));



//  4. Implement a program that checks whether a given character is a vowel or consonant.
// function check(character) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (vowels.includes(character.toLowerCase())) {
//         return "Vowel";
//     } else {
//         return "Consonant";
//     }
// }

// console.log(check('a')); 
// console.log(check('b')); 


//  5. Create a function that takes three numbers as input and returns the largest among them.
// function largest(a,b,c){
//     return Math.max(a,b,c);
// }
// console.log(largest(4,5,6))



// // 6. Write a program that checks if a given number is positive, negative, or zero.
// function checkNumber(number) {
//     if (number > 0) {
//         return "Positive";
//     } else if (number < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }
// console.log(checkNumber(-5)); 
// console.log(checkNumber(0)); 



//  7. Implement a function that calculates the grade of a student based on their score.
// function Grade(score) {
//     if (score >= 90) {
//         return "A";
//     } else if (score >= 80) {
//         return "B";
//     } else if (score >= 70) {
//         return "C";
//     } else if (score >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
// console.log(calculateGrade(85)); 

// // 8. Create a program that determines if a given string is a palindrome.
// function palindrome(string){
    //     const len = string.length;
    //     for(let i = 0;i<len/2;i++){
    //         if(string[i] !== string[len-1-i]){
    //             return "not-palindrome";
    //         }
    //         return "palindrome";
    //     }
    // }
    // console.log(palindrome("mam"));
    

// // 9. Write a function that checks whether a person is eligible to vote based on their age.
// function Eligible(age){
//     if(age > 18){
//         return "Eligible";
//     }
//     else{
//         return "Not-Eligible";
//     }
// }
// console.log(Eligible(20));

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides

// function Triangle(a,b,c){
//     if ( a=== b && b === c && a===c){
//         return "Equilateral";
//     }
//     else if(a === b || b === c || a === b)
//     {
//         return "Isosceles"
//     }
//     else {
//             return "scalen";
//     }
// }
// // console.log(Triangle(4,5,6));
// console.log(Triangle(3,3,3));




// 1. Given length and breadth of a rectangle return the area of a rectangle.
// let length = 5;
// let breadth = 6;
// let area = (length * breadth);
// console.log(area);

   
// 2. Take a number and print the square of the number
// let a = 5;
// let k = 5*5;
// console.log(k);
// 3. Take two numbers and only print the integer part when a is divided by b
// let a = 5;
// let b = 3;
// let c = Math.floor(a/b);
// console.log(c);

// 4. Take a number and print out the last digit of the number.
// let a = 456;
// console.log(a%10);
// 5. Take a number and find the cube of that number
// let a = 5
// console.log(a*a*a);
// 6. Take a 3 digit number and print the reverse of that number.
//     Ex - 235 = 532
let b = 235;
let r = b%10;

// 7. Take a number and print out the first digit of the number.
//     Ex - 145 = 1, 789 = 7;
// 8. Take a number and return the sum of the first and last digit.
//     ex - 10 = 1+0 = 1, 452 = 4+2=7
// 9. Take the salary of five employees and print the average salary of all the employees.
// 10. Take two numbers and swap them.
//     Ex - a = 10, b=5; => a=5, b=10;














