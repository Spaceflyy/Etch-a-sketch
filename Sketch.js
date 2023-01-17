const slider = document.querySelector("input");
const DEFAULT_SIZE = 16;
const value = document.querySelector(".sliderValue");

document.querySelector("button.clearGrid").addEventListener('click',clearGrid);
document.querySelector("button.eraser").addEventListener('click', toggleEraser);

let eraserToggle = false;
let currentSize = DEFAULT_SIZE;

slider.oninput = function ()
{
    value.textContent = this.value;
    currentSize = this.value;
    clearGrid();
}

value.textContent = slider.value;


function toggleEraser()
{
    if(eraserToggle == false)
    {
        eraserToggle = true;
    } else
    {
        eraserToggle = false;
    }
}

createGrid(DEFAULT_SIZE);
function setCurrentSize(newSize)
{
    currentSize = newSize;
}

function clearGrid()
{
    document.getElementById("cellContainer").innerHTML ="";
    createGrid(currentSize);
}


function createGrid(size)
{
    const container = document.querySelector("#cellContainer");
    for(let j =0; j<size; j++)
    {
        for (let i =0; i <size; i++)
        {
            const cells = document.createElement("div");
            cells.classList.add("grid-element");
            cells.addEventListener('mouseover',()=>{
                if(!eraserToggle)
                {
                    cells.style.background = "black"
                } else
                {
                    cells.style.background = "";
                }
            
            });
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
            alert("Enter a number between 2 and 100");
        } else
        {
     
            valid = true;
            setCurrentSize(gridSize);
            clearGrid();
  
        }
    }
}