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
