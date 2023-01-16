createGrid();
let currentSize = 16;
const buttonSize = document.querySelector("button.size");
buttonSize.addEventListener('click',newGrid);
document.querySelector("button.clearGrid").addEventListener('click',clearGrid)


function clearGrid()
{
    document.getElementById("cellContainer").innerHTML ="";
    createGrid(currentSize);
}


function createGrid(size = 16)
{
    const container = document.querySelector("#cellContainer");
    for(let j =0; j<size; j++)
    {
        for (let i =0; i <size; i++)
        {
            const cells = document.createElement("div");
            cells.classList.add("grid-element");
            cells.addEventListener('mouseover',()=>{cells.style.background = "black"});
            cells.style.width = `${500/size}px`;
            cells.style.height = `${500/size}px`;
            container.appendChild(cells);
    }
    }
}


function newGrid(){
    let valid = false;
    while(!valid){
        let gridSize = prompt("Enter the size of the new grid: ");
        if((gridSize > 100) || (gridSize < 2))
        {
            alert("Enter a number between 2 and 100")
        } else
        {
            currentSize = gridSize;
            valid = true;
            clearGrid();
            createGrid(gridSize);
        }
    }

}