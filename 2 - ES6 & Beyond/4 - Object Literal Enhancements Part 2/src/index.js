let lemonJuice = 3;
let water = 3;
let sugar = 1.5;
let iceCubes = 10;

const lemonade = {
  lemonJuice,
  water,
  sugar,
  iceCubes,
  // [sugar]: 'Hi',
  // [5 * 90 + 200 / Infinity]: 'Hi',
  // [console.log('Hello World')]: 'Hi',
  calculatePrice() {
    return (
      this.lemonJuice * 0.3 +
      this.water * 0.01 +
      this.sugar * 0.25 +
      this.iceCubes * 0.05 +
      0.75
    );
  },
};

// Example 1

// function copyLemonade(lemonade) {
//   let newLemonade = {};
//   for (let key in lemonade) {
//     newLemonade[key] = lemonade[key];
//   }
//   return newLemonade;
// }
// console.log(copyLemonade(lemonade));

// Example 2

// function copyLemonade(lemonade) {
//   let newLemonade;
//   for (let key in lemonade) {
//     newLemonade = {
//       ...newLemonade,
//       [key]: lemonade[key],
//     };
//   }
//   return newLemonade;
// }
// console.log(copyLemonade(lemonade));

// Example 3

// function reverseLemonade(lemonade) {
//   let newLemonade = {};
//   for (let key in lemonade) {
//     newLemonade = {
//       [key]: lemonade[key],
//       ...newLemonade,
//     };
//   }
//   return newLemonade;
// }
// console.log(copyLemonade(lemonade));

// Example 4

// function updateLemonade(lemonade, lemonJuice, water, sugar, iceCubes) {
//   return {
//     ...lemonade,
//     lemonJuice,
//     water,
//     sugar,
//     iceCubes,
//   };
// }
//console.log(updateLemonade(lemonade, 5, 2.5, 3, 7));
// console.log({
//   ...lemonade,
//   lemonJuice: 5,
//   water: 2.5,
//   sugar: 3,
//   iceCubes: 7,
// });
// lemonade.water = 8;
// console.log({ ...lemonade, water: 5 });
// console.log(lemonade);
