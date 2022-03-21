const container = document.querySelector("#container")
const gridContainer = document.createElement('div');
document.body.appendChild(gridContainer);
gridContainer.setAttribute('class', 'gridContainer');

const button = document.createElement('button');
button.textContent = "Change the size of the board";
container.appendChild(button);

button.addEventListener('click', function(){
  button.value = prompt("Enter a positive integer: ", 16);
  clearGrid();
  makeGrid(button.value);
});


function makeGrid(gridDimension=16) {


  gridContainer.style.gridTemplateColumns = `repeat( ${gridDimension}, 1fr)`;


  for (i = 0; i < (gridDimension**2); i++) {

    const gridElement = document.createElement('div');
    gridElement.setAttribute('class', 'gridElement');
    gridContainer.appendChild(gridElement);

  }

}

function clearGrid() {
  const elements = document.querySelectorAll('.gridElement');
  for (element of elements) {
    gridContainer.removeChild(element);
  }
}
function paintCell() {
  let items = document.querySelectorAll('.gridElement');
  let itemLen = items.length;
  console.log(itemLen);
  let color= Math.floor(Math.random() * 16777215);
  color = `#${color.toString(16)}`;
  console.log(color);

}



makeGrid();
paintCell();
