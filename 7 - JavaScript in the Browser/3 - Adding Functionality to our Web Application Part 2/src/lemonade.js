// let history = {
//   previousState: [],
//   currentState: {
//     lemonJuice: {
//       amount: 0,
//       max: 8,
//       measurement: 'ounces',
//     },
//     water: {
//       amount: 0,
//       max: 8,
//       measurement: 'ounces',
//     },
//     sugar: {
//       amount: 0,
//       max: 12,
//       measurement: 'tablespoons',
//     },
//     ice: {
//       amount: 0,
//       max: 15,
//       measurement: 'cubes',
//     },
//   },
// };

// const render = ({ lemonJuice, water, sugar, ice }) => {
//   $('#lemonJuiceValue').html(lemonJuice.amount + ' ' + lemonJuice.measurement);
//   $('#waterValue').html(water.amount + ' ' + water.measurement);
//   $('#sugarValue').html(sugar.amount + ' ' + sugar.measurement);
//   $('#iceValue').html(ice.amount + ' ' + ice.measurement);
// };

// render(history.currentState);

// const decrementIngredient = (name, { amount, max, measurement }) => {
//   history = {
//     ...history,
//     currentState: {
//       ...history.currentState,
//       [name]: {
//         amount: amount > 0 ? amount - 1 : amount,
//         max,
//         measurement,
//       },
//     },
//   };
// };

// const incrementIngredient = (name, { amount, max, measurement }) => {
//   history = {
//     ...history,
//     currentState: {
//       ...history.currentState,
//       [name]: {
//         amount: amount < max ? amount + 1 : amount,
//         max,
//         measurement,
//       },
//     },
//   };
// };

// $('.increment').click((event) => {
//   history.previousState.push(currentState);
//   incrementIngredient(
//     event.target.name,
//     history.currentState[event.target.name]
//   );
//   render(history.currentState);
// });

// $('.decrement').click((event) => {
//   history.previousState.push(currentState);
//   decrementIngredient(
//     event.target.name,
//     history.currentState[event.target.name]
//   );
//   render(history.currentState);
// });

let state = {
  lemonJuice: {
    amount: 0,
    max: 8,
    measurement: 'ounces',
  },
  water: {
    amount: 0,
    max: 8,
    measurement: 'ounces',
  },
  sugar: {
    amount: 0,
    max: 12,
    measurement: 'tablespoons',
  },
  ice: {
    amount: 0,
    max: 15,
    measurement: 'cubes',
  },
};

const calcPercent = (amount, max, maxFill = 100) =>
  100 - (amount / max) * maxFill;

const render = ({ lemonJuice, water, sugar, ice }) => {
  $('#lemonJuice').css(
    'transform',
    `translate(0, ${calcPercent(lemonJuice.amount, lemonJuice.max)}%)`
  );
  $('#water').css(
    'transform',
    `translate(0, ${calcPercent(water.amount, water.max)}%)`
  );
  $('#sugar').css(
    'transform',
    `translate(0, ${calcPercent(sugar.amount, sugar.max, 40)}%)`
  );
  $('#lemonJuiceValue').html(lemonJuice.amount + ' ' + lemonJuice.measurement);
  $('#waterValue').html(water.amount + ' ' + water.measurement);
  $('#sugarValue').html(sugar.amount + ' ' + sugar.measurement);
  $('#iceValue').html(ice.amount + ' ' + ice.measurement);
};

render(state);

const updateIngredient = (name, { amount, max, measurement }, calcAmount) => {
  state = {
    ...state,
    [name]: {
      amount: calcAmount(amount, max),
      max,
      measurement,
    },
  };
};

$('.increment').click((event) => {
  updateIngredient(event.target.name, state[event.target.name], (amount, max) =>
    amount < max ? amount + 1 : amount
  );
  render(state);
});

$('.decrement').click((event) => {
  updateIngredient(event.target.name, state[event.target.name], (amount) =>
    amount > 0 ? amount - 1 : amount
  );
  render(state);
});
