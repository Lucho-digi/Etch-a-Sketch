const gridBox = document.querySelector(".gridBox");
const newGridBtn = document.getElementById("newGridBtn");
const clearBtn = document.getElementById("clearBtn");
const gridSizeOptions = document.querySelector(".gridSizeOptions");
let gridSize = 16;
let boxSize = 30;

function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const paddedColor = randomColor.length < 6 ? '0'.repeat(6 - randomColor.length) + randomColor : randomColor;
    return "#" + paddedColor;
}

function createGrid() {
    gridBox.innerHTML = "";
    gridBox.style.gridTemplateColumns = "repeat(" + gridSize + ", " + boxSize + "px)";
    gridBox.style.width = (gridSize * boxSize + ((gridSize + 1) * 2)) + "px";
    gridBox.style.height = (gridSize * boxSize + 4) + "px";

    for (let i = 0; i < gridSize * gridSize; i++) {
        let newBox = document.createElement("div");
        newBox.className = "sketchBox";
        newBox.addEventListener("mouseover", function() {
            this.style.backgroundColor = getRandomColor();
        });
        gridBox.appendChild(newBox);
    }
}

function handleNewGrid() {
    gridSizeOptions.style.display = gridSizeOptions.style.display === "none" ? "block" : "none";
    newGridBtn.style.display = "none";
    clearBtn.style.display = "none";
}

function handleGridSizeChange(event) {
    const size = event.target.getAttribute("data-size");
    if (size) {
        gridSize = parseInt(size, 10);
        createGrid();
        gridSizeOptions.style.display = "none";
        newGridBtn.style.display = "block";
        clearBtn.style.display = "block";
    }
}

function clearGrid() {
    let sketchBoxes = gridBox.querySelectorAll(".sketchBox");
    sketchBoxes.forEach(function(box) {
        box.style.backgroundColor = "";
    });
    newGridBtn.style.display = "block";
    clearBtn.style.display = "block";
}

createGrid();

newGridBtn.addEventListener("click", handleNewGrid);
clearBtn.addEventListener("click", clearGrid);

const gridSizeButtons = document.querySelectorAll(".gridSizeOption");
gridSizeButtons.forEach(function(button) {
    button.addEventListener("click", handleGridSizeChange);
});
