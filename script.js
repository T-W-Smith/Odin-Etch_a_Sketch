const grids = document.getElementById('grids');

function displayGrids() {
    for (i = 1; i < 257; i++)
    {
        const div = document.createElement('div');
        div.setAttribute('id', 'gridBox')
        grids.appendChild(div);
    }
}

displayGrids();