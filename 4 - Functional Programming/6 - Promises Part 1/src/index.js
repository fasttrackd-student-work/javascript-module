import Vorpal from 'vorpal';
import {
  writeFileSync,
  readAllFiles,
  buildQuestionArray,
  addLemonadeToOrder,
  createLemonade,
  updateOrderTotal,
  map,
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
    this.prompt(
      {
        type: 'number',
        name: 'numLemonades',
        default: 1,
        message: 'How many lemonades would you like to order?',
      },
      ({ numLemonades }) => {
        const questions = [...Array(Number.parseInt(numLemonades))].flatMap(
          buildQuestionArray
        );
        this.prompt(questions, (response) => {
          const order = updateOrderTotal(
            [...Array(Number.parseInt(numLemonades))].reduce(
              map(createLemonade(response))(addLemonadeToOrder),
              {
                total: 0,
                lemonades: [],
                customer: {
                  name: args.name,
                  phoneNumber: args.phoneNumber,
                },
                lemonadeStand: {
                  name: 'Cooksys Lemonade Stand',
                },
              }
            )
          );

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
