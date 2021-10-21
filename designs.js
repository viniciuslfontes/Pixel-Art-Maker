function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    //loop row
    for (let i = 0; i < height; i++) {
        grid += '<tr class="row-' + i + '">';
        //loop cell
        for (let j = 0; j < width; j++) {
            grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
        }
        grid += '</tr>';
    }
    //addgrid
    table.innerHTML = grid;

    //click event
    addClickEventToCells();
}

//values for height and width from form and call makeGrid
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

//events to cells
function addClickEventToCells() {
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let clickedCell = event.target;
            clickedCell.style.backgroundColor = colorPicker.value;
        });
    }
}

//sizePicker
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};