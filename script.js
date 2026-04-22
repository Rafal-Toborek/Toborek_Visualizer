
let lengthInput = document.getElementById('LengthInput');
let widthInput = document.getElementById('WidthInput');
let startXInput = document.getElementById('StartXInput');
let startYInput = document.getElementById('StartYInput');
let targetXInput = document.getElementById('TargetXInput');
let targetYInput = document.getElementById('TargetYInput');
let submitButton = document.getElementById('submitButton');
let table = document.getElementById('table');


submitButton.addEventListener('click', function() {

    lengthValue = Number(lengthInput.value);
    widthValue = Number(widthInput.value);
    startXValue = Number(startXInput.value);
    startYValue = Number(startYInput.value);
    targetXValue = Number(targetXInput.value);
    targetYValue = Number(targetYInput.value);
    createGrid(lengthValue, widthValue);
    displayTable(mainArray);
    console.log(mainArray);
    colorStartCell(startXValue, startYValue);
    colorTargetCell(targetXValue, targetYValue);
    console.log(startXValue, startYValue);
    console.log(lengthValue, widthValue);
    bfs(startXValue, startYValue, targetXValue, targetYValue);
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
function colorStartCell(startX, startY) {
    let cell = table.rows[startX].cells[startY];
    cell.style.backgroundColor = 'green';
}

function colorTargetCell(targetX, targetY) {
    let cell = table.rows[targetX].cells[targetY];
    cell.style.backgroundColor = 'red';
}

    

function bfs(startX, startY, targetX, targetY) {
    let queue = [];
    let visited = new Set();
    queue.push([startX, startY]);
    visited.add(`${startX},${startY}`);
    console.log(queue);
    let targetCell = table.rows[targetX]?.cells[targetY];

    while (queue.length > 0) {
    let current = queue.shift();
    let [x, y] = current;

    if (x === targetX && y === targetY) {
        console.log('Target found');
        targetCell.style.backgroundColor = 'red';
        break;
        console.log(visited);
    }

    let neighbors = getNeighbors(x, y);
    for (let neighbor of neighbors) {
        let nx = neighbor[0];
        let ny = neighbor[1];
        let key = `${nx},${ny}`;
        if (!visited.has(key)) {
            visited.add(key);
            queue.push(neighbor);
            let cell = table.rows[nx]?.cells[ny];
            cell.style.backgroundColor = 'lightyellow';
        }
    }
}
    function getNeighbors(x, y) {
        let neighbors = [];
        if (x > 0) {
            neighbors.push([x - 1, y]);
        }
        if (x < mainArray.length - 1) {
            neighbors.push([x + 1, y]);
        }
        if (y > 0) {
            neighbors.push([x, y - 1]);
        }
        if (y < mainArray[0].length - 1) {
            neighbors.push([x, y + 1]);
        }
        return neighbors;
    }
}
