const initialState = {
  customer: {
    name: '',
    phoneNumber: '',
  },
  lemonadeStand: {
    name: 'Cooksys Lemonade Stand',
  },
  lemonades: [],
  total: 0,
};

let order = {
  customer: {
    name: '',
    phoneNumber: '',
  },
  lemonadeStand: {
    name: 'Cooksys Lemonade Stand',
  },
  lemonades: [],
  total: 0,
};

$('#name').val(order.customer.name);
$('#phoneNumber').val(order.customer.phoneNumber);
$('#lemonadeStand').val(order.lemonadeStand.name);

const resetState = () => {
  order = initialState;
};

$('#name').change((event) => {
  order = {
    ...order,
    customer: {
      ...order.customer,
      name: event.target.value,
    },
  };
  $('#nameError').html('').addClass('hidden');
  console.log(order);
});

$('#phoneNumber').change((event) => {
  order = {
    ...order,
    customer: {
      ...order.customer,
      phoneNumber: event.target.value,
    },
  };
  $('#phoneError').html('').addClass('hidden');
  console.log(order);
});

$('#lemonadeStand').change((event) => {
  order = {
    ...order,
    lemonadeStand: {
      ...order.lemonadeStand,
      name: event.target.value,
    },
  };
  console.log(order);
});

$('.yellow-button').click(() => {
  if (order.customer.name && order.customer.phoneNumber) {
    localStorage.setItem('order', JSON.stringify(order));
    resetState();
    $('#name').val(order.customer.name);
    $('#phoneNumber').val(order.customer.phoneNumber);
    $('#lemonadeStand').val(order.lemonadeStand.name);
    window.location = './lemonade.html';
  } else {
    if (!order.customer.name) {
      $('#nameError')
        .html('Your name is required to make an order')
        .removeClass('hidden');
    }
    if (!order.customer.phoneNumber) {
      $('#phoneError')
        .html('Your phone number is required to make an order')
        .removeClass('hidden');
    }
  }
});
