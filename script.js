let gridSize = 16;

let isRGB = false;
let isLighten = false;
let isDarken = false;
let isErase = false;

let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true)
document.body.onmouseup = () => (isMouseDown = false)

const grids = document.getElementById('grids');
const color = document.getElementById('mycolor')
const slider = document.getElementById('myrange');
const sliderValue = document.getElementById('sliderValue');
const rgbBtn = document.getElementById('rgbBtn');
const lightenBtn = document.getElementById('lightenBtn');
const darkenBtn = document.getElementById('darkenBtn');
const eraseBtn = document.getElementById('eraseBtn');
const clearBtn = document.getElementById('clearBtn');

slider.addEventListener('input', sliderGridSize);
rgbBtn.addEventListener('click', activateRGBMode);
lightenBtn.addEventListener('click', activateLightenMode);
darkenBtn.addEventListener('click', activateDarkenMode);
eraseBtn.addEventListener('click', activateEraseMode);
clearBtn.addEventListener('click', clearGrids);

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
    if (isRGB) {
        let tempColor = rgbMode()
        e.target.style.backgroundColor = tempColor;
        e.target.style.border = '1px solid ' + tempColor;
    }
    else if (isLighten) {
        let tempColor = lightenMode(getComputedStyle(e.target).getPropertyValue('background-color'));
        e.target.style.backgroundColor = tempColor;
        e.target.style.border = '1px solid ' + tempColor;
    }
    else if (isDarken) {
        let tempColor = darkenMode(getComputedStyle(e.target).getPropertyValue('background-color'));
        e.target.style.backgroundColor = tempColor;
        e.target.style.border = '1px solid ' + tempColor;
    }
    else if (isErase) {
        e.target.style.backgroundColor = 'white';
        e.target.style.border = '1px solid gray';
    }
    else {
        e.target.style.backgroundColor = color.value;
        e.target.style.border = '1px solid ' + color.value;
    }
}

function changeColorsHover(e) {
    if (isMouseDown)
    {
        if (isRGB) {
            let tempColor = rgbMode()
            e.target.style.backgroundColor = tempColor;
            e.target.style.border = '1px solid ' + tempColor;
        }
        else if (isLighten) {
            let tempColor = lightenMode(getComputedStyle(e.target).getPropertyValue('background-color'));
            e.target.style.backgroundColor = tempColor;
            e.target.style.border = '1px solid ' + tempColor;
        }
        else if (isDarken) {
            let tempColor = darkenMode(getComputedStyle(e.target).getPropertyValue('background-color'));
            e.target.style.backgroundColor = tempColor;
            e.target.style.border = '1px solid ' + tempColor;
        }
        else if (isErase) {
            e.target.style.backgroundColor = 'white';
            e.target.style.border = '1px solid gray';
        }
        else {
            e.target.style.backgroundColor = color.value;
            e.target.style.border = '1px solid ' + color.value;
        }
    }
}

function sliderGridSize() {
    gridSize = slider.value;
    sliderValue.textContent = gridSize + ' x ' + gridSize;
    removeGrid();
    displayGrid();
}

function activateRGBMode() {
    if (!isRGB)
    {
        isRGB = true;
        isDarken = false;
        isLighten = false;
        isErase = false;
        rgbBtn.style.background = 'gray';
        lightenBtn.style.background = '';
        darkenBtn.style.background = '';
        eraseBtn.style.background = '';
    }
    else
    {
        isRGB = false;
        rgbBtn.style.background = '';
    }

}

function rgbMode() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let newRGB = 'rgb(' + r + ',' + g + ',' + b + ')';
    return newRGB;
}

function activateLightenMode() {
    if (!isLighten)
    {
        isLighten = true;
        isDarken = false;
        isRGB = false;
        isErase = false;
        lightenBtn.style.background = 'gray';
        rgbBtn.style.background = '';
        darkenBtn.style.background = '';
        eraseBtn.style.background = '';
    }
    else
    {
        isLighten = false;
        lightenBtn.style.background = '';
    }
}

function lightenMode(color) {
    let colorArr = color.slice(
        color.indexOf("(") + 1, 
        color.indexOf(")")
    ).split(", ");
    
    let r = Math.min(Math.max(+colorArr[0] + 26, 0), 255);
    let g = Math.min(Math.max(+colorArr[1] + 26, 0), 255);
    let b = Math.min(Math.max(+colorArr[2] + 26, 0), 255);

    let newRGB = 'rgb(' + r + ',' + g + ',' + b + ')';
    return newRGB;
}

function activateDarkenMode() {
    if (!isDarken)
    {
        isDarken = true;
        isLighten = false;
        isRGB = false;
        isErase = false;
        darkenBtn.style.background = 'gray';
        lightenBtn.style.background = '';
        rgbBtn.style.background = '';
        eraseBtn.style.background = '';
    }
    else
    {
        isDarken = false;
        darkenBtn.style.background = '';
    }
}

function darkenMode(color) {
    let colorArr = color.slice(
        color.indexOf("(") + 1, 
        color.indexOf(")")
    ).split(", ");
    
    let r = Math.min(Math.max(+colorArr[0] - 26, 0), 255);
    let g = Math.min(Math.max(+colorArr[1] - 26, 0), 255);
    let b = Math.min(Math.max(+colorArr[2] - 26, 0), 255);

    let newRGB = 'rgb(' + r + ',' + g + ',' + b + ')';
    return newRGB;
}

function activateEraseMode() {
    if (!isErase)
    {
        isErase = true;
        isRGB = false;
        isDarken = false;
        isLighten = false;
        eraseBtn.style.background = 'gray';
        lightenBtn.style.background = '';
        darkenBtn.style.background = '';
        rgbBtn.style.background = '';
    }
    else
    {
        isErase = false;
        eraseBtn.style.background = '';
    }
}

function clearGrids() {
    removeGrid();
    displayGrid();
    isRGB = false;
    isLighten = false;
    isDarken = false;
    isErase = false;
    clearBtn.style.background = 'gray';
    eraseBtn.style.background = '';
    lightenBtn.style.background = '';
    darkenBtn.style.background = '';
    rgbBtn.style.background = '';
    setTimeout(function(){
        clearBtn.style.background = '';
    }, 250);
}

displayGrid();