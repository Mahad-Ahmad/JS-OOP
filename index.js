// Modify exports directly

// null is primitive

// binary 0 first  check type

// Reassigning exports to a new object
// exports = { newProperty: 'This will not be exported' };
// This will be accessible outside the module
// console.log(module.exports.myProperty);  // 'Hello from exports'

// This will NOT be accessible outside the module
// console.log(module.exports.newProperty); // undefined

// console.log(this);

// "use strict";
// this = global

// console.log(globalThis, 'down');
// OOP

// Object Oriented Programming is a style of programming or programming paradigm centered
// around Objects rather than functions
// Many frameworks is designed with OOP concept in mind like Angular.

// Four Pillars of OOP.
// Encapsulation
// Abstraction
// Polymorphism
// Interhitance

// Before OOP we had Pracedural Programming that divided a program into a set of functions
// data stored in a bunch of variables and functions that  operate on the data, simple and
// straight forward style, in larger app we have to copying and pasting bunch of code and if we
// may change one function several other function break. Thats we called Spegatti code. There is
// so much interdependency between all these functions and it become problematic.

// OOP came to solve this problem, In oop we combined group of related variables and functions
// into a unit called an object. we refer the variables as property and functions as methods, this
// method is called Encapsulation.

// Pracedural Programming
let baseSalary = "100,000",
  overtime = "20",
  rate = "10";

function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
}
function stop() {}

// Encapsulation
let employee = {
  baseSalary: "100,000",
  overtime: "20",
  rate: "10",
  start: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

// In encapsulation we have fewer number of parameters. Fewer the number of parameters the easier
// it is to use and manage the function.

// Abstraction
// Think of a DVD player and Remote, all the complexity is hidden from us we just have to press
// the play buttons and video strats playing.
// we use same Techniques in objects and hide some the properties and methods from the outside
// and this gives us comple of benefits like simpler interface (object), Reduce the impact of
// change like if we change the private methods none of these changes will leak to the outside
// because we dont have any code that touches these outside of the containing objects

// Interhitance
// It is mechanism that allows you to eliminate redundant code.
// If we have html elements like textbox, checkbox and dropdown list and all these elements have
// a few things in common like properties hidden and innerHTML and methods like click() and focus(),
// instead redefining all these for all elements we can define them in one generic object and
// have other objects inherit these properties and methods.
// if we have common things/property we define that in generic object and inherit that were we
// nedd that instead of defining them again again.

// Polymorphism: Many-Forms
// It is a technique that allows to get rid of long if and else and switch and case statements
// so if we want to render all the html elements and the way each elemnet is rendered on the
// page is different from the others and if we want to render them we have to use if else or
// switch case statements but in oop we can implement the render method inside each of these
// objects and the render method will behave differently depending on the type of object we are
// refrencing like element.render()

// OBJECTS

// Object Literals
// Simple way of defing an object with properties and method
// let circle = {
//   radius: 1,
//   direction: {
//     x: 1,
//     y: 2,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// function print() {
//   var b = (a = 6);

// return b
// }

// print();
// console.log(b);

// const tempA = {
//   title: "Ahmad",
//   //     funA() {
//   //     setTimeout(() => {
//   //       console.log(this, "down");
//   //     });
//   //   },

//   funA: () => {
//     setTimeout(() => {
//       console.log(this, "down");
//     });
//   },

//   titopati: {
//     title: "Mahad",
//     funB: () => {
//       const g = this;
//       setTimeout(() => {
//         console.log(globalThis, "up");
//       });
//     },
//   },
// };
// const obj = new A();
// const funC = tempA.titopati.funB();

// console.log(tempA.funA());

class MyClass {
  title = "this is my class";
  methodA = () => {
    console.log(this, "first this");

    function methodB() {
      console.log(this, "second this");
      setTimeout(() => {
        console.log(this, "third this");
      });
    }

    methodB();
  };
}

const myInstance = new MyClass();
myInstance.methodA();
