// STRING 
// let a = "hello";
// console.log(a[0]);
//  console.log(a.length-1);
// let strlen = a.length;
// console.log(strlen);
// console.log(a[strlen-1]);


//................................................ str . charat()......................................
// let a = "hello world !";
// console.log(a.charAt(2));
// console.log(a.at(1));

// ........................................str.touppercase() = all capital letter.................................

// let s = "I love my india !";
// console.log(s.toUpperCase());

// ........................................str.tolowercase() = all capital letter.................................
// let s = "I love my india !";
// console.log(s.toLowerCase());
// console.log(s.toLocaleUpperCase());


// let str = " this is a string";
// if (str.indexOf("this") != -1){
//     console.log("found")
// }
//  console.log(str.indexOf("this"));// give index
//  console.log(str[0]); //gives character


// let str = " this is a string";
// if (str.indexOf("this") === 0){
//     console.log("found")
// }


//..............................................includes() method..................................
// let str = "This is a string";
// console.log(str.includes("This"));
// console.log("Hello".includes("H"));
// console.log("Hello".includes("o",2));

//..............................................startwith() method..................................

// startwith() = return true if a string start with specified string,otherwise false
// console.log("Hello".startsWith("H"));
// console.log("Hello".startsWith("He"));

//..............................................endswith() method..................................

// endswith()= end withspefidied string
// console.log("Hello".endsWith("o"));
// console.log("Hello".endsWith("lo"));

//..............................................slice() method..................................

//  let str = "This is a string";
// console.log(str.slice(0,3));
// console.log(str.slice(5,8));
// console.log(str.slice(0));
// console.log(str.slice(-6));
//  console.log(str.slice(5,-6));

//..............................................substring() method..................................

//substring = Extract the chaaracter from a string ,between two specified indices
// let str = "this is a string";
// console.log(str.substring(0,3));
// console.log(str.slice(0,3));
// console.log(str.substring(3,0));
// console.log(str.slice(3,0));


// substr = extract the character from a string,begaining at a specified start
// position ,and through the specified number of charcacter

// let str = "This is a string";
// console.log(str.substr(0,4));
//  console.log(str.substr(2,5));
//  console.log(str.substr(-4,3));

//..............................................replace() method..................................

//replace = searches a string for a specified value,or a regular expression ,and return
//a new string where the specified value are replaced

//concat = joins two or more strings,and return a new joined strings

// let str1 = "Hello";
// let str2 = "world";
// console.log(str1.concat(" ",str2));
//console.log(str + " " + str2);

// trim() = removes whitespace from both end of string
// let str = "   hello world";
// console.log(str.trim());


// // trimStart()= Remove whitespaces from the begaining of String
// let str = "  hello world  ";
// console.log(str.trimStart());

// trimEnds()= Remove whitespaces from the ending of String
// let str = "  hello world  ";
// console.log(str.trimEnd());

// repeat() = returns a new string with a specified number of copies of an existing string
// given length


// padStart() - Pads a string with another string, until the resulting string reaches the given length

// let str = "5";
// console.log(str.padStart(4, "0"));
// console.log(str.padStart(4, "1"));
// console.log(str.padStart(4, "a"));
// console.log(str.padStart(4, "ab"));

// let str = "Hello";
// console.log(str.padStart(5, "a"));

// let str = 5;
// let newStr = str.toString();
// console.log(newStr.padStart(5, "0"));

// let str = "Hello";
// console.log(str.padStart(2, "a"));


// padEnd() - Pads a string with another string, until the resulting string reaches the given length

// let str = "5";
// console.log(str.padEnd(4, "0"));
// console.log(str.padEnd(8, "x"));


// repeat() - Returns a new string with a specified number of copies of an existing string

// let str = "Hello";
// console.log(str.repeat(3));
// console.log(str.repeat(0));


// replace() - Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced

// let str = "Hello World";
// console.log(str.replace("World", "Universe"));

// let str = "Hello World World";
// console.log(str.replace("World", "Universe"));
// console.log(str.replaceAll("World", "Universe"));

















