const order = JSON.parse(localStorage.getItem('order'));
order.lemonadeStand.id = 5;

const calculateLemonadePrice = ({ lemonJuice, water, sugar, ice }) =>
  (
    lemonJuice.amount * 0.3 +
    sugar.amount * 0.25 +
    water.amount * 0.01 +
    ice.amount * 0.05 +
    0.75
  ).toFixed(2);

order.lemonades = order.lemonades.map((lemonade) => ({
  ...lemonade,
  price: calculateLemonadePrice(lemonade),
}));

const calcPercent = (amount, max, maxFill = 100) =>
  100 - (amount / max) * maxFill;

const render = () => {
  $('.order-box').html(
    order.lemonades.map((lemonade, idx) => createLemonadeDiv(lemonade, idx))
  );
  $('#order-total').html(
    `Total Price $${order.lemonades
      .reduce((acc, { price }) => acc + Number.parseFloat(price), 0)
      .toFixed(2)}`
  );
};

render();

const setRemove = () => {
  $('.remove').click((event) => {
    const lemonadeIndex = Number.parseInt(event.target.id);
    order.lemonades.splice(lemonadeIndex, 1);
    localStorage.setItem('order', JSON.stringify(order));
    render();
    setRemove();
  });
};

setRemove();

$('#place-order').click(() => {
  console.log('clicked');
  fetch('http://localhost:8080/customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order.customer),
  })
    .then((response) => response.json())
    .then((customer) => {
      order.customer = customer;
    })
    .then(() =>
      Promise.all(
        order.lemonades.map(({ lemonJuice, water, sugar, ice }) =>
          fetch('http://localhost:8080/lemonades', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              lemonJuice: lemonJuice.amount,
              water: water.amount,
              sugar: sugar.amount,
              iceCubes: ice.amount,
            }),
          })
        )
      )
    )
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((lemonades) => {
      order.lemonades = lemonades;
    })
    .then(() =>
      fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      })
    )
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('order', JSON.stringify(data));
      window.location = './order.success.html';
    })
    .catch((err) => console.log(err));
});
