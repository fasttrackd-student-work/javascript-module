const order = JSON.parse(localStorage.getItem(order));

if (!order.total) {
  window.location = './index.html';
}

$('#total-price').html(Number.parseFloat(order.total).toFixed(2));
$('.yellow-button').click(() => {
  localStorage.setItem('order', JSON.stringify({}));
  window.location = './index.html';
});
