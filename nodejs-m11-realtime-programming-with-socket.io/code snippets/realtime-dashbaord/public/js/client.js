var socket = io('http://localhost:4000');
socket.on('time', function (data) {
  var time = new Date(data.time);
  $('.time').text(
    time.getMonth() + '/' + time.getDate() + '/' + time.getFullYear() + ' ' +
    time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());
});

socket.on('active-connections', function (data) {
  $('.connections').text(data);
});