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


