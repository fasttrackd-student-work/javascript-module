let lemonJuiceLabel = document.getElementById('lemonJuiceLabel');
console.log(lemonJuiceLabel);
lemonJuiceLabel.innerHTML = '<p> Hello </p>';

const example = (string) => {
  console.log(string);
};

// let incrementButtons = document.getElementsByClassName('increment');
// let incrementButtons = document.querySelectorAll('.increment');
let incrementButton = $('.increment')[1];
console.log(incrementButton);

// incrementButtons.forEach((button) =>
//   button.addEventListener('click', () => alert('Increment Button Clicked'))
// );

// incrementButtons.forEach((button) =>
//   button.addEventListener('click', (event) => {
//     const namedDiv = event.path[2];
//     console.log(namedDiv);
//     switch (namedDiv.getAttribute('name')) {
//       case 'lemon-juice':
//         console.log('Lemon Juice Div');
//         break;
//       case 'water':
//         console.log('Water Div');
//         break;
//       case 'sugar':
//         console.log('Sugar Div');
//         break;
//       case 'ice':
//         console.log('Ice Div');
//         break;
//       default:
//         console.log('Not sure where you are');
//         break;
//     }
//     // if (namedDiv.getAttribute('name') === 'sugar') {
//     //   console.log('Sugar Div');
//     // }
//   })
// );

// for (let button of incrementButtons) {
incrementButton.addEventListener('click', (event) => {
  const namedDiv = event.path[2];
  console.log(namedDiv);
  switch (namedDiv.getAttribute('name')) {
    case 'lemon-juice':
      console.log('Lemon Juice Div');
      break;
    case 'water':
      console.log('Water Div');
      break;
    case 'sugar':
      console.log('Sugar Div');
      break;
    case 'ice':
      console.log('Ice Div');
      break;
    default:
      console.log('Not sure where you are');
      break;
  }
});
// }
