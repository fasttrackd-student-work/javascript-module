// const add = (a, b, c) => a + b + c;

// const add = (a, b) => a + b;

// const curry =
//   (f, arr = []) =>
//   (...args) =>
//     ((a) => (a.length >= f.length ? f(...a) : curry(f, a)))([...arr, ...args]);

// const curriedAdd = curry(add);

// const increment = curriedAdd(1);

// console.log(curriedAdd(1)(2));

// console.log(curriedAdd(1, 2, 3, 4, 5, 6));

// const curriedAdd = (a) => (b) => (c) => a + b + c;

// function add(a, b, c) {
//   return a + b + c;
// }

// function curriedAdd(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(1, 2, 3));
// console.log(curriedAdd(1)(2)(3));

// function add(a, b) {
//   return a + b;
// }

// function curriedAdd(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// function increment(a) {
//   return a + 1;
// }

// const increment = curriedAdd(1);

// const add5 = curriedAdd(5);

// console.log(add(1, 2));
// console.log(curriedAdd(1)(2));

// console.log(increment(10));

// console.log(add5(20));

// const f = (num, ...a) => console.log(a);

// f(10, 20, 30, 40, 'Hello', true, [1, 2, 3], { a: 'Bye', b: 'Hi' });

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// f(...a);
