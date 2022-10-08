let lemonJuice = 3;
let water = 3;
let sugar = 1.5;
let iceCubes = 10;

// const lemonade = {
//   lemonJuice: lemonJuice,
//   water: water,
//   sugar: sugar,
//   iceCubes: iceCubes,
// };

const lemonade = {
  lemonJuice,
  water,
  sugar,
  iceCubes,
  getLemonJuice() {
    return this.lemonJuice;
  },
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

console.log(lemonade);
console.log(lemonade.getLemonJuice());
console.log(lemonade.calculatePrice());

lemonade.water = 6;
lemonade.lemonJuice = 4;

console.log(lemonade.calculatePrice());
