
let lengthInput = document.getElementById('LengthInput');
let widthInput = document.getElementById('WidthInput');
let startInput = document.getElementById('StartInput');
let targetInput = document.getElementById('TargetInput');
let submitButton = document.getElementById('submitButton');
let table = document.getElementById('table');
let value = parseInt(lengthInput.value);
let widthValue = parseInt(widthInput.value);
let startValue = parseInt(startInput.value);
let targetValue = parseInt(targetInput.value);

submitButton.addEventListener('click', function() {

    value = parseInt(lengthInput.value);
    widthValue = parseInt(widthInput.value);
    createGrid(value, widthValue);
    displayTable(mainArray);
    console.log(mainArray);
});

function createGrid(gridRows, gridCols) {
    mainArray = [];
    for (let gridRow = 0; gridRow < gridRows; gridRow++) {
        rowArray = [];
        for (let col = 0; col < gridCols; col++) {
            rowArray.push(gridRow + ',' + col);
        }
        mainArray.push(rowArray);
    }
    return mainArray;
    console.log(mainArray);
    console.log(rowArray);
}

function displayTable(array) {
    table.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < array[i].length; j++) {
            let column = document.createElement('td');
            column.textContent = array[i][j];
            row.appendChild(column);
        }
        table.appendChild(row);
    }
}

function highlightStart(startValue) {
    let highlighted = document.
}
//function bfs(start, target) {