import Vorpal from 'vorpal';
import {
  calculateLemonadePrice,
  calculateOrderTotal,
  writeFileSync,
  readAllFiles,
} from './lib';

const vorpal = Vorpal();

vorpal
  .command('hello <name>', 'Prints Hello <name> to the console')
  .option('-f --file', 'Provide a file name')
  .action(function (args, callback) {
    if (args.options.file) {
      this.log('I see you want to make a file');
    }
    this.log(`Hello ${args.name}`);
    callback();
  });

vorpal
  .command(
    'createOrder <name> <phoneNumber>',
    'Create an order and saves it as a JSON file'
  )
  .action(function (args, callback) {
    const order = {
      total: 0,
      lemonades: [],
      customer: {
        name: args.name,
        phoneNumber: args.phoneNumber,
      },
      lemonadeStand: {
        name: 'Cooksys Lemonade Stand',
      },
    };
    this.prompt(
      {
        type: 'number',
        name: 'numLemonades',
        default: 1,
        message: 'How many lemonades would you like to order?',
      },
      ({ numLemonades }) => {
        const questions = [];
        for (let i = 1; i <= Number.parseInt(numLemonades); i++) {
          questions.push({
            type: 'number',
            name: 'lemonJuice' + i,
            message: `How many cups of lemon juice do you want in lemonade ${i}?`,
          });
          questions.push({
            type: 'number',
            name: 'water' + i,
            message: `How many cups of water do you want in lemonade ${i}?`,
          });
          questions.push({
            type: 'number',
            name: 'sugar' + i,
            message: `How many cups of sugar do you want in lemonade ${i}?`,
          });
          questions.push({
            type: 'number',
            name: 'iceCubes' + i,
            message: `How many ice cubes do you want in lemonade ${i}?`,
          });
        }
        this.prompt(questions, (response) => {
          for (let i = 1; i <= numLemonades; i++) {
            order.lemonades.push({
              lemonJuice: Number.parseInt(response['lemonJuice' + i]),
              water: Number.parseInt(response['water' + i]),
              sugar: Number.parseInt(response['sugar' + i]),
              iceCubes: Number.parseInt(response['iceCubes' + i]),
            });
          }

          for (let lemonade of order.lemonades) {
            lemonade.price = calculateLemonadePrice(lemonade);
          }
          order.total = calculateOrderTotal(order);

          writeFileSync(
            order.lemonadeStand.name + '/' + order.customer.name + '.json',
            order
          );
          callback();
        });
      }
    );
  });

vorpal
  .command(
    'getOrders <lemonadeStand>',
    'Get all orders for the given lemonade stand'
  )
  .action(function ({ lemonadeStand }, callback) {
    const orders = readAllFiles(lemonadeStand);
    this.log(`There are ${orders.length} orders at ${lemonadeStand}`);
    for (let order of orders) {
      this.log('Order:');
      this.log(`Total Price: ${order.total}`);
      this.log('Lemonades:');
      this.log(order.lemonades);
      this.log('Customer:');
      this.log(order.customer);
    }
    callback();
  });

vorpal.delimiter('lemonade-stand$').show();
