const grid = document.querySelector(".grid");
const resetButton = document.querySelector("button");
let gridSquares = [];
let mousedown = 0;

document.documentElement.style.setProperty("--columns", 16);
resetButton.addEventListener('click', resetGrid);

document.body.onmousedown = function(){
    mousedown++;
}

document.body.onmouseup = function(){
    mousedown--;
}

createGrid(16);

function createGrid(columns){
    for (let i = 0; i < columns*columns; i++){
        let gridSquare = document.createElement("div")
        gridSquare.classList.add("gridsquare");
        gridSquare.addEventListener('mouseover', lightUp)
        grid.appendChild(gridSquare);
        

        gridSquares.push(gridSquare);
    }
}


function lightUp(e){
    if(mousedown > 0){
            e.target.classList.add("bright");
    }

}

function resetGrid(){
    let newSize = prompt('What Grid Size?')

    if (newSize < 16) {
        newSize = 16;
    }

    document.documentElement.style.setProperty("--columns", newSize);
    removeGridSquares();
    createGrid(newSize);
}

function removeGridSquares(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
    gridSquares = [];
}
