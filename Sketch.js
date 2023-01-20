
const slider = document.querySelector(".sliderContainer input");
const DEFAULT_SIZE = 16;
const value = document.querySelector(".sliderValue");
const colourInput = document.querySelector(".settings #colourSelector");

const clearBtn = document.querySelector("button.clearGrid");
const eraserBtn = document.querySelector("button.eraser");
const colourBtn = document.querySelector("button.colourMode");
const randomClrBtn = document.querySelector("button.randomColours");
const shadeBtn = document.querySelector("button.shade");

clearBtn.addEventListener('click',clearGrid);

let eraserToggle = false;
let currentSize = DEFAULT_SIZE;
let currentMode;
let opacity = 0;

slider.oninput = function ()
{
    value.textContent = this.value;
    currentSize = this.value;
    clearGrid();
}

value.textContent = slider.value;


createGrid(DEFAULT_SIZE);
function setCurrentSize(newSize)
{
    currentSize = newSize;
}

eraserBtn.onclick = () =>{setCurrentMode('eraser')};
colourBtn.onclick = () => {setCurrentMode('colour')};
randomClrBtn.onclick = () =>{setCurrentMode('random')};
shadeBtn.onclick = () => {setCurrentMode('shade')};

function setButtonActive(mode)
{

    if(mode ==='eraser')
    {
        shadeBtn.classList.remove('active');
        randomClrBtn.classList.remove('active');
        colourBtn.classList.remove('active');
        eraserBtn.classList.add('active');
    } else if(mode === 'colour')
    {
        shadeBtn.classList.remove('active');
        eraserBtn.classList.remove('active');
        randomClrBtn.classList.remove('active');
        colourBtn.classList.add('active');
    } else if (mode ==='random')
    {
        shadeBtn.classList.remove('active');
        eraserBtn.classList.remove('active');
        colourBtn.classList.remove('active');
        randomClrBtn.classList.add('active');
    } else
    {
        eraserBtn.classList.remove('active');
        colourBtn.classList.remove('active');
        randomClrBtn.classList.remove('active');
        shadeBtn.classList.add('active');
        opacity = 0;

    }
}

function setCurrentMode(newmode)
{
    currentMode = newmode;
    setButtonActive(newmode);
}



function clearGrid()
{
    opacity =0;
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
            cells.addEventListener('mouseover',changeColour);
            cells.addEventListener('mousedown',changeColour);
            cells.style.width = `${500/size}px`;
            cells.style.height = `${500/size}px`;
            container.appendChild(cells);
    }
    }
}

let mouseDown = false;
document.body.onmousedown = () =>{mouseDown = true};
document.body.onmouseup = () => {mouseDown =false};
function changeColour(e)
{
    if(e.type === 'mouseover' && !mouseDown) return; 

    if (currentMode === "eraser")
    {
        e.target.style.backgroundColor = "";
    }else if(currentMode ==='colour')
    {
        e.target.style.backgroundColor = colourInput.value;
    }else if(currentMode === 'random')
    {
        let r = Math.floor(Math.random()* 255);
        let g = Math.floor(Math.random()* 255);
        let b = Math.floor(Math.random()* 255);
        e.target.style.backgroundColor = 'rgba(' +r+ ',' +g+ ',' +b+')';
    } else
    {
        opacity+=0.003;
        e.target.style.backgroundColor = 'rgba('+0+','+0+','+0+',' +opacity+')';
    }
          
}