var socket = io('http://localhost:4000');
socket.on('products', function (data) {
  console.log('products', data);
  buildTable(data)
});

socket.on('sale', function (data) {
  console.log('sale', data);
  buildTable(data)
});

socket.on('replenish', function (data) {
  console.log('replenish', data);
  buildTable(data)
});

function buildTable(products) {
  $('#stock tr').remove();
  var trHTML = '<tr class="row-heading"><td>ID</td><td>title</td><td>price</td><td>stock</td></tr>';
  $.each(products, function (i, product) {
    trHTML += '<tr><td>' + product.id + '</td><td>' + product.title + '</td><td>' + product.price + '</td><td>'+ product.stock + '</td></tr>';
  });
  $('#stock').append(trHTML);
}

