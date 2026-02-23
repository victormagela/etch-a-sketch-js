let gridCount = 16;

const container = document.querySelector(".container");
const sizeButton = document.querySelector("#size-btn");

run();

function run() {

    let containerArea = Math.pow(gridCount, 2);

    for (let i = 0; i < containerArea; i++) {
        
        let gridSquare = document.createElement("div");
    
        gridSquare.style.flex = `1 1 ${(100 / gridCount).toString()}%`;
    
        container.appendChild(gridSquare);
    
        gridSquare.addEventListener("mouseenter", () => {
            gridSquare.style.backgroundColor = "black";
        });
    }
}


function changeGridSize() {
    let size = Number(prompt("How many squares per side do you want? Min: 16 Max: 100"));

    if (size < 16 || size > 100 || isNaN(size)) {
        alert("Invalid size!");
        return;
    }

    container.replaceChildren();

    gridCount = size;

    run();
};