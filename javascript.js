const container = document.querySelector("#container")
const gridContainer = document.createElement('div');
document.body.appendChild(gridContainer);
gridContainer.setAttribute('class', 'gridContainer');

function makeGrid(gridDimension=16) {

  gridContainer.style.gridTemplateColumns = `repeat( ${gridDimension}, 1fr)`;


  for (i = 0; i < (gridDimension**2); i++) {

    let gridElement = document.createElement('div');
    gridElement.setAttribute('class', 'gridElement');
    gridContainer.appendChild(gridElement);

  }

}


makeGrid();
