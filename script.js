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
