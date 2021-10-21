
sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
});

const canvas = document.getElementById("pixelCanvas");

function clearGrid () {
    if (canvas.innerHTML == "<b></b>") {
      canvas.innerHTML = "pixelCanvas";
      }
    else {
      canvas.innerHTML = "<b></b>";
    }
}

function makeGrid() {
const table = document.createElement("table");
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
for ( var i = 0; i < height; ++i) {
    const row = document.createElement("tr");
    for (var j = 0; j<width; ++j) {
        const cell = document.createElement("td");
        row.appendChild(cell);
    }
    table.appendChild(row);
}
canvas.appendChild(table)
}
canvas.addEventListener("click", function (event) {
        event.target.style.backgroundColor = document.getElementById("colorPicker").value;
      });