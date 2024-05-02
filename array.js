// let arr = ["Trupti","sonal","puja"];
// let arry = new Array();

// let arr = ["Trupti","sonal","puja"];
// console.log(arr);

// arr[1] = "sapna";
// console.log(arr);

// arr.splice(1,0,"sapna");
// console.log(arr);

//  let arr = ["Trupti","sonal","puja"];
//  console.log(arr.length);


// let arr = ["surat",{name : "riya"},10,true,function(){console.log("hello")}];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[2]);
// console.log(arr[1].name);

// let arr = ["Trupti","sonal","puja"];
// console.log(arr[-1]); // undefine because in that no value in -1 place
// console.log(arr[arr.length-1]);  //element
// console.log(arr.length-1);  //index



// let arr = [1,2,3,4,5,6,7];
// console.log(arr[-1]);

// let arr = ["shika"];
// let arr2 = arr;
// console.log(arr===arr2);

// let arr =[];
// arr [99]="trupti";
//  console.log(arr);
// console.log(arr.length);

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length-1; i++) {
//     console.log(arr[i]);
// }


// let arr = [1, 2, 3, 4, 5];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// let arry= new Array("a","b","c");
// console.log(arry);

// let arr =[1,2,3,4,5,6,7];
// let arr = []
// arr[21]="tr";
// console.log(arr);
// console.log(arr.length);
// console.log(arr);
//  arr.length=3;
//  console.log(arr);
// arr.length=5;
// console.log(arr);
// console.log(arr[4]);

// let arr = new Array(5);
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);



// ...................homework.........................
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0;i<arr.length; i++) {
//     console.log(arr[i]);
// }


// let arr = [1, 2, 3, 4, 5];
// console.log("Odd numbers:");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//     }
// }

// console.log("Even numbers:");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// let arr = [1, 2, 3, 4, 5];
// console.log("Odd numbers and their indices:");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         console.log("Index:", i, "Number:", arr[i]);
//     }
// }
// let arr = [1, 2, 3, 4, 5];
// console.log("Even numbers and their squared values:");
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log("Number:", arr[i], "Squared Value:", arr[i] ** 2);
//     }
// }

// .........................................shift() method............................
// let arr = [1,2,3,4,5];
// arr.shift();
// console.log(arr);    //delete first element

//...........................................unshift() method........................

// arr.unshift(6);
// console.log(arr); // add element on first poition

// .........................................pop() method............................

// arr.pop();
// console.log(arr);   // delete last element

// .........................................push() method............................

// arr.push(6,7)
// console.log(arr);  // add element on last position

//  let arr = [1,2,3,4,5];
//  arr.push(6);
//  console.log(arr.length);



// let arr = [
// [1,2,3],
// [4,5,6],
// [7,8,9]   ];

// // console.log(arr[0]);
// // console.log(arr[1][1]);
// console.log(arr[2][0]);

// let arr = [1,2,3,4,5,6];
// console.log(arr.toString());
// console.log(typeof arr);
// console.log(String(arr)=== "1,2,3,4,5,6");

// console.log([1,2]+[3,4]);
// console.log([1,2,]+[3,4]);
// console.log([1,2]+[,3,4]);
// console.log([,,3,4]);
// console.log([1,2,,]);

// console.log([] + 1);
// console.log(""+1);
// console.log([1] + 1);
// console.log([7] + 1 + 2);


// console.log([] == []);..............................
// // console.log(typeof []);
// console.log(""=="");
//  console.log(""==0);
// console.log(""==false);



// let arr = ["riya","raj","trupti","punam","sapna"];
// delete arr[1];
// console.log(arr.length);
// console.log(arr);
// console.log(arr[1]);
// arr.splice(1,2);
// console.log(arr);

// let arr1 = ["riya","raj","trupti","punam","sapna"];
// arr1.splice(1,2,"shital","piya");
// console.log(arr1);
// let removeelement=  arr.splice(1,1);
// console.log(removeelement);

//  let arr = [1,2,3,4,5];
// arr.splice(-2,0,6,7,8);
// console.log(arr);
// arr.splice(0,0,6,7,8);
// console.log(arr);
// arr.splice(-1,0,6,7,8);
// console.log(arr);

//  let arr = ["riya","raj","trupti","punam","sapna"];
// console.log(arr.slice(1,3));
//  console.log(arr.slice(-2));
// console.log(arr.slice(-2,4));
//  console.log(arr.slice(-3,5));



//.......................concat() method...............................
// let arr = [1,2];
// let arr1 = [3,4];
// console.log(arr.concat(arr1));
//  console.log(arr.concat([3,4],5,6));

// indexof
//  let arr = ["riya","raj","trupti","raj","punam","sapna","raj"];
// console.log(arr.lastIndexOf("raj"));
// console.log(arr.indexOf("raj"));


// let arr = [NaN];
// console.log(arr.indexOf(NaN));
// console.log(arr.includes(NaN));

// let arr = [1,2,3,NaN,5,6];
// console.log(arr.indexOf(7));
// console.log(arr.indexOf(NaN));
// let arr1 = [" "];
// console.log(arr1.includes());

//........................findIndex() method.............................
// let arr = [
//     {name:"riya",age:20},
//     {name:"raj",age:30},
//     {name:"trupti",age:40},
//     {name:"punam",age:50},
//     {name:"sapna",age:60},

// ];
//  let user1 = arr.findIndex(element => element.age == 40);
//  console.log(user1);

// let user = arr.find(element => element.age == 40);
// console.log(user);
// console.log(user.name);

// let result = arr.find(function(element){
//     return element.age === 40;
// });
// console.log(result);


//.........................................join() method...................................
// let arr = ["riya","raj","trupti","punam","sapna"];
// console.log(arr);
// console.log(arr.join(", "));
// console.log(typeof(arr));
// console.log(arr.join(""));


//...................................reverse() method.....................................
// let arr = ["riya","raj","trupti","punam","sapna"];
// arr.reverse();
// console.log(arr);
// arr.reverse().join(",");
// arr.reverse().join("-");

//..............................................Home Work....................................
// (1).
// let str = "Trupti";
// console.log(str.split(""));
// console.log(str.split("").reverse().join(""));
// (2).
// let str1 = "Trupti";
// let reverse = "";
// for (let i = str1.length - 1; i >= 0; i--) {
//     reverse += str[i];
// }
// console.log(reverse);

// let arr = ["riya","raj","trupti","punam","sapna"];
// let output = [];
// for (let i = 0; i < arr.length; i++) {
//     let reversedStr = "";
//     for (let j = arr[i].length - 1; j >= 0; j--) {
//         reversedStr += arr[i][j];
//     }
//     output.push(reversedStr);
// }
// console.log(output);

// let arr = ["riya", "raj", "trupti", "punam", "sapna"];
// let reversed = [];
// for (let i = 0; i < arr.length; i++) {
//     reversed.push(arr[i].split("").reverse().join(""));
// }
// console.log(reversed);

//......................................map() method............................
// let arr = [1,2,3,4,5];
// let newarr = arr.map((element) => element*2);
// console.log(newarr);
// let newarr = arr.map((element,index) => element*index);
// console.log(newarr);


//......................................filter() method............................

// let arr = [1,2,3,4,5];
// let newarr = arr.filter((element) => element % 2 === 0);
// console.log(newarr);
// let newarr = arr.filter((element,index) => index % 2 === 0);
// console.log(newarr);


//......................................reduce() method............................
// let arr = [1,2,3,4,5];
// let newarr = arr.reduce((acc,element,index) => acc+element,0);
// console.log(newarr);
// let newarr = arr.reduce((acc,element,index) => acc+element+index,0);
// console.log(newarr);

//......................................sort() method............................

//  let arr = ["riya","raj","trupti","punam","sapna"];
// console.log(arr.sort());
// console.log(arr.sort().reverse());

//......................................every() method............................

// let arr = [1,2,3,4,5];
// let result = arr.every((element)=> element>0);
// console.log(result);

// let result = arr.every((element)=> element>0);
// console.log(result);

//......................................some() method............................

// let arr = [1,2,3,4,5];
//  let result = arr.some((element)=> element>5);
//  console.log(result);

//......................................ForEach() method............................

// let arr = [1, 2, 3, 4, 5];
// arr.forEach((element, index, array) => {
//     console.log(element, index, array);
// });

// arr.forEach((element, index) => {
//         console.log(element, index);
// });


//......................................fill() method............................
// let arr = [1,2,3,4,5];
// console.log(arr.fill(0));
// console.log(arr.fill(0,1,3)); //0 for fill , 1 for start index, 3 for end  index
// console.log(arr.fill(0,1));
// console.log(arr.fill("a",1,4));

//......................................isArray() method............................

//  let arr = [1,2,3,4,5];
//  let arr =
// console.log(Array.isArray(arr));





//............................................................................................
// const myarr = [1,2,3,4,5];
// for(let i in myarr){
//         console.log(i);
// }






















// let arr = [1,2,3,4,5,6,7];
// console.log(arr(-1));
// let arr = ["shika"];
// let arr2 = arr;
// arr
// console.log(arr===arr2);

// let arr =[];
// arr [99]="trupti";
//  console.log(arr);

// console.log(arr.length);

// let arr = [1,2,3,4,5];
// for(let i=arr.length;i<0;i--){
//     console.log(arr[i]);
// }
// let arry= new Array("a","b","c");
// console.log(arry);

// let arr =[1,2,3,4,5,6,7];

// arr[21]="tr";
// console.log(arr.length);
// console.log(arr);
// arr.length=3;
// console.log(arr);
// arr.length=5;
// console.log(arr);
// console.log(arr[4]);

// let arr = new Array(5);
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);





