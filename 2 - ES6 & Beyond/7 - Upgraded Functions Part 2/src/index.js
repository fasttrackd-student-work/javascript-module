/* Uncomment each example one by one to test
out the code using the following command: 
npm start */

// Example 1

// function add(x, y) {
//   return x + y;
// }
// console.log(add(4, 6));

// Example 2

// const add = (x, y) => {
//   return x + y;
// };
// console.log(add(4, 6));

// Example 3

// const add = (x, y) => x + y;
// console.log(add(4, 6));

// Example 3

// function increment(x) {
//   return x + 1;
// }

// const increment = (x) => x + 1;

// console.log(((x) => x + 1)(5));

// Example 4

// function updateLemonade(
//   { calculatePrice },
//   lemonJuice,
//   water,
//   sugar,
//   iceCubes
// ) {
//   return {
//     lemonJuice,
//     water,
//     sugar,
//     iceCubes,
//     calculatePrice,
//   };
// }

// let a = 10;

// const updateLemonade = (
//   { calculatePrice },
//   lemonJuice,
//   water,
//   sugar,
//   iceCubes
// ) => ({
//   lemonJuice,
//   water,
//   sugar,
//   iceCubes,
//   calculatePrice,
//   a,
// });

// console.log(water);

// Example 5

// const receiver = { updateLemonade };

// const outer = () => {
//   let x = 2;

//   const inner = () => {
//     let y = 5;
//     return x + y;
//   };

//   return inner;
// };

// const containedInner = outer();

// console.log(containedInner);

// console.log(containedInner());
