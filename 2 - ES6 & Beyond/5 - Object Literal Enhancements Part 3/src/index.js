const lemonade = {
  lemonJuice: 3,
  water: 3,
  sugar: 1.5,
  iceCubes: 10,
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

function updateLemonade(
  { calculatePrice },
  lemonJuice,
  water,
  sugar,
  iceCubes
) {
  return {
    lemonJuice,
    water,
    sugar,
    iceCubes,
    calculatePrice,
  };
}

// Example 6

// lemonade.water = 8;
// console.log({ ...lemonade, water: 5 });
// console.log(lemonade);
// console.log(updateLemonade(lemonade, 1, 2, 3, 20));

// Example 1

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbersCopy = [...numbers];
// numbersCopy[10] = 11;
// console.log(numbers);
// console.log(numbersCopy);

// Example 2

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 2, 3]];
// const numbersCopy = [...numbers];
// numbersCopy[10][0] = 5;
// console.log(numbers);
// console.log(numbersCopy);

// Example 3

// let water = lemonade.water;
// let lemonJuice = lemonade.lemonJuice;
// let sugar = lemonade.sugar;
// let iceCubes = lemonade.iceCubes;

// let { water, lemonJuice, sugar, iceCubes } = lemonade;

// console.log(water);
// console.log(lemonJuice);
// console.log(sugar);
// console.log(iceCubes);

// Example 4

// let { a, lemonJuice, sugar, iceCubes } = lemonade;

// console.log(a);
// console.log(lemonJuice);
// console.log(sugar);
// console.log(iceCubes);

// Example 5

// let { water: a, lemonJuice, sugar, iceCubes } = lemonade;

// console.log(a);
// console.log(lemonJuice);
// console.log(sugar);
// console.log(iceCubes);
