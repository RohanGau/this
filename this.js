"use strict";
// this in global space

console.log(this); // globalObject (window object)

this;

// this inside a function

function x() {
  // the value depends on strict / non strict mode
  // in strict mode output is undefine
  // in non strict output is window object
  console.log(this); // window
}
x();

window.x();

// this in strict mode - (this  substitution)

// if the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non strict mode

// this value depends on how this is called - (window)

x(); // undefined only in strict mode
window.x(); // window object in strict mode

// this inside a object's method

const obj = {
  a: 10,
  b: 10,
  x: function () {
    // know as method because it is inside the object
    console.log(this); // (this keyword depends how the function is call)
  },
};

obj.x(); // output is is object (obj)

// call apply bind methods (sharing methods)

const student = {
  name: "Rohan",
  printName: function () {
    console.log(this);
    console.log(this.name);
  },
};

student.printName();

const student2 = {
  name: "Gaurav",
};

student.printName.call(student2);

// this inside arrow function

const arrowFunction = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this);
    };
    y();
  },
  setValue: function () {
    this.a = value;
  },
  getValue: () => {
    console.log(this.a);
  },
  setName: function (name) {
    this.name = name;
  },
  getName: () => {
    console.log(this.name);
  },
};

// arrowFunction.setName("Rohan Kumar");
// arrowFunction.getValue();
// arrowFunction.setValue(20);
// arrowFunction.getValue();
arrowFunction.x();

// this inside nested arrow function

// this inside DOM element  => the value of this in inside DOM it reference to the HTML element

// this inside class, constructor 


const student = {
  firstName: "Rohan",
  lastName: "Kumar",
  // printName: function () {
  //   console.log(this.firstName + " " + this.lastName);
  // },
};

function printName(hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
}

const student2 = {
  firstName: "Jagrit",
  lastName: "Dhrolia",
};

// student.printName();

// function borrowing
printName.call(student, "Ghaziabad", "Uttar Pradesh");

// throw error
// let printMethod = printName.call(student, "Ghaziabad", "Uttar Pradesh");
// Uncaught TypeError: printMethod is not a function

printName.apply(student2, ["Ghaziabad", "Uttar Pradesh"]);

// bind method
let printMethod = printName.bind(student2, "Ghaziabad", "Uttar Pradesh");

console.log("printMethod :", printMethod);
printMethod();

function Person(first_name, last_name) {
  this.firstName = first_name;
  this.lastName = last_name;
  this.display = function () {
    console.log(`Name : ${this.firstName} ${this.lastName}`);
  };
}

// function Person2(first_name) {
//   this.firstName = first_name;
// }
// console.log("this.firstName :", this.firstName); // undefined in above case

const person = new Person("Amit", "kumar");
// person.display();

// Person2("random");

function foo() {
  console.log("this.a :", this.a);
}

const object = {
  a: 20,
  foo: foo,
};

// object.foo();

const numbers = {
  numberA: 10,
  numberB: 20,
  sum: function () {
    // let that = this;
    console.log("sum this === numbers", this === numbers);
    function calculate() {
      console.log("calculate this === numbers", this === numbers);
      return this.numberA + this.numberB;
    }
    // const calculate = () => {
    //   console.log("calculate this === numbers", this === numbers);
    //   return this.numberA + this.numberB;
    // };
    return calculate();
  },
};

// console.log("numbers.sum() : ", numbers.sum());

class Planet {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this === earth);
    return this.name;
  }
}

const earth = new Planet("earth");
earth.getName();
