// Part 1: Variable Scope and Hoisting - The Case of the Missing Declaration

console.log(mysteryVariable);
mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable);
  var mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);

/*

The first console.log(mysteryVariable); throws 
a ReferenceError because mysteryVariable has not
 been declared globally (no var, let, or const).
Inside revealMystery(), var mysteryVariable is hoisted 
to the top of the function with an initial value of undefined, 
so it logs:


Key point: Variables declared with var are 
hoisted and function-scoped, but undeclared 
variables accessed before assignment cause a ReferenceError.


*/

// Rewritten Code:
console.log(mysteryVariable);
mysteryVariable = 10;
console.log(mysteryVariable);

function revealMystery() {
  console.log("Inside revealMystery:", mysteryVariable); // ReferenceError
  let mysteryVariable = 20;
  console.log("Inside revealMystery (after declaration):", mysteryVariable);
}

revealMystery();
console.log("After revealMystery:", mysteryVariable);

//Explanation:

/*
    Using let (or const) introduces a temporal
     dead zone (TDZ) — you cannot access the variable 
     before its declaration. Unlike var, which is hoisted and 
     initialized to undefined, let is hoisted but not initialized, so accessing it 
    before declaration causes a ReferenceError.


*/

/* 
    Concept of Hoisting:
    Hoisting is JavaScript's behavior of moving
     variable and function declarations to the 
     top of their scope during compilation.
    Variables declared with **var** are hoisted
    and initialized to **undefined**, which
    means they can be accessed before their 
    declaration (though not their assigned value). 
    In contrast, variables declared with **let** and **const** are
    also hoisted, but remain uninitialized in
     a temporal dead zone until the actual 
     declaration line is executed. Accessing 
     them before declaration results in a 
     **ReferenceError**. This difference makes let and 
     const safer and more predictable than var.


*/
