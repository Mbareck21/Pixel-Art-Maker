let height, width, color, sizePicker;

sizePicker = document.getElementById('sizePicker');

sizePicker.addEventListener('submit', (e) => {
  e.preventDefault();
  height = document.getElementById('inputHeight').value;
  width = document.getElementById('inputWidth').value;
  makeGrid(height, width);
});

function makeGrid(x, y) {
  $('tr').remove();
  for (let i = 1; i <= x; i++) {
    $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
    for (let j = 1; j <= y; j++) {
      $('#table' + i).append('<td></td>');
    }
  };

  $('td').click(function addColor() {
    color = document.getElementById('colorPicker').value;
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  });
}
