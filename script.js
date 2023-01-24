let gridSize = 16;

let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true)
document.body.onmouseup = () => (isMouseDown = false)

const grids = document.getElementById('grids');
const sizeBtn = document.getElementById('sizeBtn');

sizeBtn.addEventListener('click', changeGridSize);

function displayGrid() {
    grids.style.gridTemplateColumns = 'repeat(' + gridSize + ', 2fr)';
    grids.style.gridTemplateRows = 'repeat(' + gridSize + ', 2fr)';
    
    for (i = 1; i < (gridSize * gridSize) + 1; i++)
    {
        const div = document.createElement('div');
        div.setAttribute('id', 'gridBox');
        div.addEventListener('mousedown', changeColors);
        div.addEventListener('mouseover', changeColorsHover);
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

function changeColorsHover(e) {
    if (isMouseDown)
    {
        e.target.style.backgroundColor = 'black';
    }
}

function changeGridSize() {
    gridSize = prompt('How big?');
    if(gridSize > 64){
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