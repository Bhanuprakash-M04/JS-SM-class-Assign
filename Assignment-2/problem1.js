//Problem 1 : The Persistent Counter (Initial Incorrect Attempt)

function createCounter() {
  let count = 0;
  function incrementCounter() {
    count++;
    return count;
  }
  return incrementCounter;
}
const counterA = createCounter();
console.log(counterA()); // Expected: 1, Actual: ?
console.log(counterA()); // Expected: 2, Actual: ?
const counterB = createCounter();
console.log(counterB()); // Expected: 1 (independent counter), Actual: ?

/*
    Think: What will be the output of the console.log statements? Will counterA and
counterB maintain independent counts?

Answer:
Yes, counterA and counterB will maintain independent counts, because each call to createCounter() creates a new closure with its own separate count.

Why this (initial attempt) works for independent counters (and the subtle issue):
Each call to createCounter() creates a new closure with its own count variable, so counterA and counterB have independent states. This is because count is declared inside the function, giving each returned function a separate memory space.
If count were declared outside createCounter(), all counters would share the same variable, leading to shared state. This would break the independence between counters.



*/
