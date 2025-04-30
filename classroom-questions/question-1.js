function createUniqueCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    getValue() {
      return count;
    },
  };
}
const counter1 = createUniqueCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.getValue());
const counter2 = createUniqueCounter();
console.log(counter2.increment());
console.log(counter2.getValue());
