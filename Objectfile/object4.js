//Prototypes = 
// Every object in js has a prototype and prototypes has also as an object


// const morehobbies={
//     "hobby3":"reading",
//     "hobby4":"writing",
// }
// const hobbies = {
//     "hobby1":"singing",
//     "hobby2":"dancing",
// }
// const combinehobbies = Object.assign({},hobbies,morehobbies);
// const newhobby = Object.create(combinehobbies);
// newhobby.hobby6 = "painting";

// console.log(newhobby.hobby4);
// console.log(newhobby);


// console.log(newhobby.hobby1);
// console.log(hobbies,"hobbies");

// prototype chain = chek a value if he finding  a null value

//......................................................Object.create() method...........................................

// Object.create() =
// It create a new Object,using an existing Object as a prototype of a newly create.

//object.seal() = 
// It prevent new property from being add to it and marks all existing property as non- configurable
// values of present properties can still br change as long as they are writable

// const obj = {
//     name:"sangeeta",
//     age:18,
// }

// Object.seal(obj);
// obj.name="nisha";
// obj.age=20;
// delete obj.age;
// obj.address="delhi";


// const newobj = Object.entries(obj);

// for(let i=0;i<newobj.length;i++){
//     let key = newobj[1][0];
//     let value = newobj[1][1];
// }

//................................................constructor() function.............................................


// const student1 = {
//     name: "sangeeta",
//     age: 18,
// printdetail(){
//     console.log(`Hey, I am ${this.name} and I am ${this.age} year old`);
// }
// }

// const student2 = {
//     name: "nisha",
//     age: 80,
// printdetail(){
//     console.log(`Hey, I am ${this.name} and I am ${this.age} year old`);
// }
// }

// naming rule of construction function = we will write in pascal case meand first letter capital 
// function Student(name,age){
    //studentdetail empty object
    // this=studentDetails
    //{}
    // this.name=name;
    // this.age=age;
    // console.log(name,age);

// }
// let studentDetails=new Student("sangeeta",18);
// console.log(studentDetails);

// Note = here is automatically return this thats why we are not write this here

//..............................................................................................................

// new keyword = It create a new empty object.
// It attach the value of this keyword to the new empty object.
// It return the newly created object.it return this keyword.

//................................................................................................................

// function Student(a,b){
//     this.StudentName=a;
//     this.age = b;

//     this.printdetail=function(){
//             console.log(`Hey, I am ${this.StudentName} and I am ${this.age} year old`);
//         }
// }

// const punam = new Student("punam",20);
// const komal = new Student("punam",20);
// const shalini = new Student("punam",20);
// const radhika = new Student("punam",20);

// console.log(punam,komal,shalini,radhika);

// punam.printdetail();
// komal.printdetail();
// shalini.printdetail();
// radhika.printdetail();

//.........................................Destructuring().....................................................

// let arr = [1,2,3];

// let first = arr[0];
// let second = arr[1];
// let third = arr[2];

// console.log(first,second,third);

// let [first,second,third]=arr;
// console.log(first,second,third);
// let [,,,,,,,,,,,,,,,,,,,thirty]=arr;
// console.log(thirty);


// let student ={
//     name:"puran",
//     age:15,
// }

// let {age,name} = student;
// console.log(name);

