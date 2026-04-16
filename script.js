let value = parseInt(numberInput.value);
numberInput = document.getElementById('numberInput');
submitButton = document.getElementById('submitButton');
table = document.getElementById('table');

submitButton.addEventListener('click', function() {

    value = parseInt(numberInput.value);
    createGrid(value, value);
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

