let gridSize = 16;

const grids = document.getElementById('grids');
const sizeBtn = document.getElementById('sizeBtn');

sizeBtn.addEventListener('click', changeGridSize);

function displayGrid() {
    grids.style.gridTemplateColumns = 'repeat(' + gridSize + ', 25px [col-start])';
    
    for (i = 1; i < (gridSize * gridSize) + 1; i++)
    {
        const div = document.createElement('div');
        div.setAttribute('id', 'gridBox');
        div.addEventListener('mouseover', changeColors);
        grids.appendChild(div);
    }
}

function removeGrid() {
    while(grids.lastElementChild) {
        grids.removeChild(grids.lastElementChild);
    }
}

function changeColors(e) {
    e.target.style.backgroundColor = 'black';
}

function changeGridSize() {
    gridSize = prompt('How big?');
    if(gridSize > 100){
        console.log('Too big of a number');
    }
    else if(gridSize < 1){
        console.log('Too small of a number');
    }
    else if(isNaN(gridSize)) {
        console.log('Please enter a number');
    }
    else {
        removeGrid();
        displayGrid();
    }
}

displayGrid();