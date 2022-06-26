// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const sizePicker = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
let sizeW = document.getElementById('inputWidth').value;
let sizeH = document.getElementById('inputHeight').value;
let tbodyEl = document.getElementById('pixelCanvas');
// let tbRow = document.createElement('tr');
// tbodyEl = tbodyEl.appendChild(tbRow)
// let tCell = document.createElement('td');
// tbRow.appendChild(tCell)
sizePicker.addEventListener('submit', (e) => {
      e.preventDefault()
  for (let i = 0; i <= sizeH; i++) {
    let tbRow = document.createElement('tr');
    tbodyEl = tbodyEl.appendChild(tbRow)
    for (let i = 0; i <= sizeW; i++) {
      let tCell = document.createElement('td');
      tbRow = tbRow.appendChild(tCell);
    }
  }

  
});


function makeGrid() {


}