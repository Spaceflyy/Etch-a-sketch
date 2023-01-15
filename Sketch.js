const container = document.querySelector("#cellContainer");

for (let i =0; i <16*16; i++)
{
    const cells = document.createElement("div");
    cells.classList.add("grid-element");
    cells.addEventListener('mouseover',()=>{cells.style.background = "black"});
    cells.style.width = `${500/16}px`;
    cells.style.height = `${500/16}px`;
    container.appendChild(cells);
}

