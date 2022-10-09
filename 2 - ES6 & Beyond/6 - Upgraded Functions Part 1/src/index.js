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
  calculatePriceLambda: () => {
    return (
      lemonJuice * 0.3 + water * 0.01 + sugar * 0.25 + iceCubes * 0.05 + 0.75
    );
  },
};

console.log(lemonade.calculatePrice());
console.log(lemonade.calculatePriceLambda());
