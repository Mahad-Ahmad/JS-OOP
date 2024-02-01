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
// If object has one or more method we says object has behaviour like a person.

// Object Literals
// Simple way of defing an object with properties and method
// An object in JS is a collection of key value pairs

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

// Factory Function;
// return an object inside a function and change the data using paramenters

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const circle = createCircle(10)
// circle.draw()

// Constructor Function
// Name of the function should be in upercase

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const anotherCircle = new Circle(10)
// When we use new operator couple of things happen 
// {}
// set this point to empty object (by default this points to the global object)
// return that object with the attached function
anotherCircle.draw()

// Constructor Property
// Every object in JS has property called constructor that refrences function that was
// used to created that object
// we can check that using object name dot constructor.
// when we create an object using object literals internally JS using constructor function
// for creating the object.
// We do havc other constructor properties like 
// new String() ===> '',"",``
// new Boolean ===> true,false
// new Number() ===> 1,2,3,4
// but we dont use that JS uses that for creating these.




// Functions are Objects
// When we delcare a function using function syntax JS internally uses new Function() 
// syntax for creating this object and we have methods and properties we use dot notation
// Call({}, 1,2): used for calling a function first argument is {} and next we can have as many as
// we want 
// Apply({}, [1,2]): used for calling a function first argument is {} and next we can have as 
// many as we want but we have pass that in array 
// This methods behave same as new operator, if we dont pass {} this will point to window and 
// same happens with new if we dont pass that.

