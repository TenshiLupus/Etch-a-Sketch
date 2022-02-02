

function createGrid(columns, rows){
    let grid = document.createElement('div');
    grid.classList.add('gridc');
    document.body.appendChild(grid);
    const resetterButton = document.getElementById('resetter');
    for(let i = 0; i < columns; i++){
        for(let j = 0; j < rows; j++){
            
            const gridSquare = document.createElement('div');
            gridSquare.addEventListener('mouseover', e => colorDiv(e));
            resetterButton.addEventListener('click', clearGrid);
            // gridSquare.textContent = "*";
            grid.appendChild(gridSquare);
        } 
    }
    grid.style.gridTemplateColumns = `repeat(${columns},minmax(0,1fr))`;
}

function clearGrid(){
    const grid = document.querySelector('.gridc');
    document.body.removeChild(grid);
    columns = prompt('how many columns');
    rows = prompt("how many rows");
    if(columns > 100){
        columns = 100;
    }
    if(rows > 100){
        rows = 100;
    }
    createGrid(columns,rows);
}

function colorDiv(e){
    e.target.classList.add('marked');

}

createGrid(16,16); 