
// Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.
//  let arr = [1,2,3,4,5];
//  let newarr = arr.reduce((acc,element) => acc+element,0);
//  console.log(newarr);

// function sumarr(array){
//     let sum = 0;
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum;
// }

// let result = [1, 2, 3, 4, 5];
// console.log(sumarr(result));


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

// function Maximum(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// const arr = [1, 2, 3, 4, 5];
//console.log( Maximum(arr));


// Find Minimum Element: Write a function to find the minimum element in an array of integers.
// function minimum(arr) { 
//     let minimum = Math.min(...arr); 
//     return minimum
// }

// let arr = [1, 2, 3, 4, 5];
// let result = minimum(arr);
// console.log(result);



// function Minimum(arr) {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(Minimum(arr));



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


// //  Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newarr = arr.filter((element) => element % 2 === 0);
// console.log(newarr);

// function array(arr){
//     // let f = [...arr];
//     let ad =[];
//     for(let i=0;i<arr.length;i++){
//         if (i % 2 === 0){
//             ad.push(i);
//         }
//     }
//     return ad;
// }
// let result= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array(result));

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3=[...arr1,...arr2];
// console.log(arr3);
// console.log(arr3.toString());
// let n = arr3.join(",");
// console.log(typeof n);

// console.log(n);
// console.log(typeof arr3);

// let arr4 =[];
// console.log(arr1.concat(arr2));
// let k = arr4.slice(0,0,arr1);
// console.log(k);