// Problem 2: The Delayed Greeter (Incorrect Assumption about Variable Scope)

function delayedGreeter(names) {
  for (var i = 0; i <= names.length; i++) {
    setTimeout(function () {
      console.log(`Hello, ${names[i]}!`);
    }, i * 1000);
  }
}
delayedGreeter(["Alice", "Bob", "Charlie"]);
// Expected output (with delays):
// Hello, Alice! (after 0 seconds)
// Hello, Bob! (after 1 second)
// Hello, Charlie! (after 2 seconds)
// Actual output: ?

/* 
    Think: What will be the output of this code? Will it greet the names as expected with
the increasing delays? Run this code and observe the result.

Actual Output:
Hello, undefined!
Hello, undefined!
Hello, undefined!


Why this happens:
Because var is function-scoped, by the time the setTimeout callbacks run, the loop has already completed and i equals names.length. So names[i] is undefined in all callbacks.

Fix: Use let instead of var, which is block-scoped and preserves the correct i value for each iteration:
for (let i = 0; i < names.length; i++) { ... }





*/
