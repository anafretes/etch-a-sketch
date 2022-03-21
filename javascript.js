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
  paintCell();
});


function makeGrid(gridDimension=16) {

  if (gridDimension > 100) {
    alert("Grid is too large. Please enter a number smaller than 100");
    makeGrid();
  } else if (gridDimension < 1 ) {
    gridDimension = 16;
    alert("Grid can't be built. Please try again with a positive integer.");
    makeGrid();
  } else {
    gridContainer.style.gridTemplateColumns = `repeat( ${gridDimension}, 1fr)`;

    for (i = 0; i < (gridDimension**2); i++) {
      const gridElement = document.createElement('div');
      gridElement.setAttribute('id', `${i}`);
      gridElement.setAttribute('class', 'gridElement');
      gridContainer.appendChild(gridElement);
    }
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

  let colorRgb = "rgb(";
  let rgbArr = [];
  for (let i = 0; i < 3; i++) {
    let generate = Math.floor(Math.random() * 256);
    rgbArr.push(generate);
    if (i < 2) {
      colorRgb += `${generate}, `;
    } else {
      colorRgb += `${generate})`;
    }
  }


  items.forEach(function (item) {

    item.addEventListener('mouseenter', () => {
      item.setAttribute('style', `background-color: ${colorRgb}`);
      let itemColor = item.style.backgroundColor;
      console.log(itemColor);
    });
  });
}



makeGrid();
paintCell();
