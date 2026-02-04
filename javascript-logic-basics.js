const mysym = Symbol("key1");

const jsuser = {
  name: "hitesh",
  age: 18,
  [mysym]: "key45",
  location: "jaipur",
  email: "hitesh@google.com",
  isloogedin: false,
  lastlogindays: ["monday", "saturday"],
};

//console.log(jsuser.email);
//console.log(jsuser["email"]);
//console.log(jsuser[mysym]);
//console.log(jsuser);

//overwriting values
jsuser.email = "puneetsharma@gmail.com";

//to freeze the content of an object
//Object.freeze(jsuser)

jsuser.greeting = function () {
  console.log(`hello js user,${this.name}`);
}; // first we converted string to backticks this is known as string interpolation

//console.log(jsuser.greeting());

const tinderuser1 = {};

tinderuser1.id = "238466";
tinderuser1.name = "Puneet";
tinderuser1.isloggedin = false;

//console.log(tinderuser);

const regularuser = {
  email: "some@gami.com",
  fullname: {
    userfullname: {
      firstname: "puneet",
      lastname: "sharma",
    },
  },
};

//console.log(regularuser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

//const obj3 = Object.assign({}, obj1, obj2);
//empty object is the target and all the others are source
const obj3 = { ...obj1, ...obj2 };

const users = {
  id: 1,
  email: "ggshh.com",
};

//to access a particular object and one of its key values use
//users[1].email

//console.log(tinderuser1);

//console.log(Object.keys(tinderuser1));
//console.log(Object.values(tinderuser1));

//console.log(tinderuser1.hasOwnProperty("isloggedin"));

const course = {
  id: "12323",
  fess: "999",
  courseinstructor: "puneet sharma",
};

const { courseinstructor } = course;
//i can destructure this object like assign a different name to the key
//const {courseinstructor: instructor}=course
//now i only need to print instructor and it will point to the courseinstructor

console.log(courseinstructor);

//JSON
// {
//   "name":"puneet",
//   "coursename":"hello js"
// }

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//ARRAYS    ARRAYS    ARRAYS   ARRAYS
const myarr = [1, 2, 3, 4, 5, 6];

const newarr = myarr.join();

const myn1 = myarr.slice(1, 3);
//console.log(myn1);
//console.log("b", myarr);
//slice doesnt alter the original array it just takes out a part as a copy and stores it

const myn2 = myarr.splice(1, 3);
//console.log("c", myarr);
//console.log(myn2);
//splice on the other hand alters the originakl array and leaves it with the reamining value

//concat is used to create merged new array fro, two diff array

//spread can be used to merge any number of arrays
//const new array=[...samplearray1,...samplearray2]

//if there are many iterations of array inside an array then to create a single
//array with evry values in line in single array use .flat(Infinity)
//infinity representrs the depth

//use Array.from("xxx") to create an array from any type of value
//if the data connot be converted to array then it shows an empty array  unless you specify what value
//to chose from the input to make an array

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//FILTER MAP AND REDUCE

// const coding = ["python", "c++", "java", "ruby", "nodejs", "react"];

// const values = coding.forEach((item) => {
//   console.log(item);
// });

//console.log(values);

//forrach loop doesnt returns a value its always undefined

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newnums = mynums.filter((num) => num > 4);
//when not using scope the value gets automatically returned

// const newnums2 = mynums.filter((num) => {
//   return num > 4;
// });
//this is when we use curly braces opening the scope we need to return the value
//Best Use Case: * Logic is heavy: If you need to create a temporary variable or a helper calculation before returning.
// Debugging: If you need to console.log() inside the loop to see what's happening.
// Conditional Logic: If you have an if/else block inside the map.

// const newNums = [];

// mynums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
//this is another way of doing using the fore loop

//console.log(newnums);

///== acts as a helper if two values are equal but of different data types js will
//convert into the same type and give true as answer but in case of
//=== this compares the data types too if they arent same it will return false
//it helps in minimizing the mathematical errors that mi9ght occur

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubles = mynums.map((num) => num * 2);
console.log(doubles);

// const answer = mynums.reduce(function (acc, currval) {
//   return acc + currval;
// }, 0);

const answer = mynums.reduce((acc, currval) => acc + currval, 0);

console.log(answer);

const shoppingcart = [
  {
    itemname: "course 1",
    price: 999,
  },
  {
    itemname: "course 2",
    price: 2000,
  },
  {
    itemname: "course 3",
    price: 1000,
  },
];

const total = shoppingcart.reduce((accum, item) => accum + item.price, 0);
console.log(total);
