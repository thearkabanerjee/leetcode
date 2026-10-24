/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let i = init;
  function increment() {
    init++;
    return init;
  }
  function decrement() {
    init--;
    return init;
  }
  function reset() {
    init = i;
    return i;
  }

  return {
    increment: increment,
    decrement: decrement,
    reset: reset
  }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
