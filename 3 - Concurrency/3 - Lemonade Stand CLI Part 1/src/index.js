// const order = {
//   total: 5.0,
//   lemonades: [
//     {
//       lemonJuice: 4,
//       water: 2,
//       sugar: 3,
//       iceCubes: 7,
//       price: 5,
//     },
//     {
//       lemonJuice: 4,
//       water: 2,
//       sugar: 1,
//       iceCubes: 7,
//       price: 3,
//     },
//     {
//       lemonJuice: 3,
//       water: 2,
//       sugar: 0.5,
//       iceCubes: 7,
//       price: 4.38,
//     },
//     {
//       lemonJuice: 3,
//       water: 2.14,
//       sugar: 1.25,
//       iceCubes: 7,
//       price: 2.49,
//     },
//   ],
//   lemonadeStand: {
//     name: 'Cooksys LemonadeStand',
//   },
//   Customer: {
//     name: 'Will',
//     phoneNumber: '0000000000',
//   },
// };

import Vorpal from 'vorpal';

const vorpal = Vorpal();

vorpal
  .command('hello <name> [number]', 'Prints Hello to the console')
  .option('-f --file', 'Provide a file name')
  .action(function (args, callback) {
    if (args.options.file) {
      this.log('I see you want to make a file');
    }
    this.log(`Hello ${args.name}, should I call you at ${args.number}`);
    callback();
  });

vorpal.show();
