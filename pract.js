// Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.
//  let arr = [1,2,3,4,5];
//  let newarr = arr.reduce((acc,element) => acc+element,0);
//  console.log(newarr);

function sumarr(arr){
    let sum=0;
    for(let i=0;i<arr.length();i++){
        sum+=i;
    }
     return sum;
}
let result = [1,2,3,4,5,6,7,8,9];
console.log(sumarr(result));

// //  Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.
//  function avarage(array) {
    
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
    
//     return sum / array.length;

//  }
// var numbers = [1, 2, 3, 4, 5];
// var avg = avarage(numbers);
// console.log("Average:", avg);


//  Find Maximum Element: Write a function to find the maximum element in an array of integers.
// function maximum(arr){
//     return Math.max(...arr);
// }

// let arr = [1, 2, 3, 4, 5];
// let result = maximum(arr);
// console.log(result); 

// function maximun(arr){
//   for(let i=0;i<arr.length;i++){
//     if (arr[i]>arr[i+1]){
        

//     }
//   }  
// }
// let result = [1,2,3,4,8,6,5];
// console.log(result);

// Find Minimum Element: Write a function to find the minimum element in an array of integers.
// function minimumElement(arr) { 
//     let minimum = Math.min(...arr); 
//     return minimum
// }

// let arr = [1, 2, 3, 4, 5];
// let result = minimumElement(arr);
// console.log(result);


//  Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.
// function array(arr, element) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return i; 
//         }
//     }
//     return -1; 
// }

// let arr = [1, 2, 3, 4, 5];
// let element = 3;
// let index = array(arr, element);
// console.log(element, index);

// element = 6;
// index = array(arr, element);
// console.log( element, index);

// Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).
// function sortarr(arr) {
//     arr.sort();
//      return arr;
// }
// let arr = [3,4, 1, 5, 9, 2, 6];
// sortarr(arr);
// console.log("Sorted array:", arr);

// function array(arr){
//     let max = arr[0];
//     for (let i=1;i<arr.length;i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//         return max;

//     }
//     // return max;
    
// }

// let result1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array(result1));

// //  Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newarr = arr.filter((element) => element % 2 === 0);
// console.log(newarr);

// function array(){
//     let f = [...result];
//     let ad =[];
//     for(let i=0;i<f.length;i++){
//         if (i % 2 === 0){
//             ad.push(i);
//         }
//     }
//     return ad;
// }
// let result2= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array(result2));



// let arr = [1,2,3,4];
// let arr1 = [7,8,9];
// let m = [arr+ ","+ arr1];
// console.log(m);
// let a = [...arr,...arr1];
// console.log(a);

// let arr = [1,9,3,4,5,8,6,7];
// let str=arr.toString();
// console.log(str);
// console.log(str[2]);
// console.log(str.indexOf(0));

// let f=1;
// for(let i=0;i<arr.length;i++){
//   console.log( f * i+ "="+ f*i);
// }


// function mergeArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// // Example usage:
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const mergedArray = mergeArrays(array1, array2);
// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]


// function findSecondMax(arr) {
//     // Sort the array in descending order
//     arr.sort((a, b) => b - a);
    
//     // Return the second element
//     return arr[1];
// }

// // Example usage:
// const numbers = [5, 3, 9, 7, 1, 6];
// const secondMax = findSecondMax(numbers);
// console.log(secondMax); // Output: 7


// function table(){
//     let arr = [...array];
//     arr.indexOf[2];
//     let f=1;
//     for (let i=0;i<arr.length)
// }