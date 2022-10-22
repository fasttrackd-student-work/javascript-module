import fs from 'fs';

export const calculateLemonadePrice = (lemonade) => {
  let result = 0.75;
  for (let key in lemonade) {
    switch (key) {
      case 'lemonJuice':
        result += lemonade[key] * 0.3;
        break;
      case 'water':
        result += lemonade[key] * 0.01;
        break;
      case 'sugar':
        result += lemonade[key] * 0.2;
        break;
      case 'iceCubes':
        result += lemonade[key] * 0.05;
        break;
      default:
        break;
    }
  }
  return result;
};

export const calculateOrderTotal = ({ lemonades }) => {
  let result = 0;
  for (let lemonade of lemonades) {
    result += lemonade.price;
  }
  return result;
};

export const writeFileSync = (fileName, order) => {
  fs.writeFileSync(fileName, JSON.stringify(order));
};
