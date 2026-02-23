let gridCount = 16;
let containerArea = Math.pow(gridCount, 2);

const container = document.querySelector(".container");

for (let i = 0; i < containerArea; i++) {
    
    let gridSquare = document.createElement("div");

    gridSquare.style.flex = `1 1 ${(100 / gridCount).toString()}%`;

    container.appendChild(gridSquare);

    gridSquare.addEventListener("mouseenter", () => {
        gridSquare.style.backgroundColor = "black";
    });
}

