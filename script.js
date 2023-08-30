// -- Function in JS.
// 1) What is function Declaration?

// function myFun() {
//   console.log("Welcome to my Function.");
//   return 6 * 6;
// }
// let ans = myFun();
// console.log(ans);

// 2) Fucntion Expression?

// const myFun = function () {
//   console.log("This is function Expression!");
// }
// console.log(myFun());

// 3) What is the first class function means?
// A-> In JS function are treated like a variable..

// let myFun = (num) => {
//   return num * num
// };

// let ans = myFun(4);
// console.log(ans);


// By help of the cloures..
// let myFun = (num) => {
//   let a = num;
//   return function (a) {
//     console.log(num * num);
//   }
// };


// let myFun = (func) => {
//   console.log("This is innner function");
//   func()
// };

// function myFun2() {
//   console.log("This is outer  function");
// }
// myFun(myFun2);


// Q4) What is IIFE?
// (function () {
//   console.log("This is IIFE");
// })();

// IIFE Question.
// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2)
// })(1);

// Q6)
// var num1 = 20,
//   num2 = 3,
var name = "Soumya"

// function myFun() {
// console.log(name);
//   console.log(num1 + num2);
// }
// myFun();

// A nested Fucntion Example..
// function getScore() {
//   var num1 = 2,
//     num2 = 3;

//   function add() {
//     return name + " Scored " + (num1 + num2);
//   }
//   return add();
// }
// let ans = getScore();
// console.log(ans);

// Q7-> Fucntion scope - O/P Based Question..

// for (var i = 0; i < 5; i++) {
//   console.log("This for the independet" + i);
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// ------ IMPORTANT NOTE -----
// In the above expression we have the for loop I started
// 0-5 and add setTimeout function in their and the thing is that in the case of "let" it will create a blocked scope for every itreateion and gave 0-4 in 1 sec delay.
// but in the case of "var" it will create any blocked scope and it will print 5 for the 5 times.


// Q8) function Hoisting.

// myFun();
// function myFun() {
//   console.log("My name is kanha");
// }

// console.log(a);
// var a = 10;
// console.log(a);

// var x = 21;
// var fun = function () {
//   console.log(x);
//   var x = 20;
// };
// fun();

// Q10) Param vs Argument..

// function squre(...num) { // params.
//   console.log(num);
// }

// var arr = [4, 8]
// squre(...arr); // Argument.

/*
const myFun = function (a, b, c, ...d) {
  // console.log(typeof (a + d));
  console.log(a + d);
  // console.log(typeof (Array + Number));
}

myFun(4, 8, 9, 6, 3, 5, 4, 7, 5, 8, 5, 2);
*/


// Q11) Call Back function..

// let squre = (num) => {
//   console.log(num * num);
// }

// let findSqure = (squre) => {
//   let a = 56;
//   squre(a); // Here I use the squre function inside the findSqure function.
// }

// findSqure(squre);

// function greeting(name) {
//   console.log("Hello " + name + " :)");
// }

// function activateGreet(greet) {
//   let names = ["Soumya", "Kanha", "Flora", "Lucky", "Papali"];
//   names.map(el => greet(el));
// }

// activateGreet(greeting);


// Q13) Arrow Function;

let myFun = (num1, num2) => num1 + num2;
myFun(4, 5);

// You don't have arguments keyword in arrow function.

// "this" keyword.

let username = "Soumyaaa"

let user = {
  username: "Soumya",
  rec1: () => {
    console.log("Hello to: " + this.username); // in arrow function it "this" point towards the global Object.
  },
  rec2() {
    console.log("Hello to: " + this.username);  // in regualr function it "this" point towards the inner/parent Object.
  }
}

user.rec1();
user.rec2();
