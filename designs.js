// // CONST declarations
// const MAX_GRID_HEIGHT = 50;
// const MAX_GRID_WIDTH = 50;
// const GRID_HEIGHT_ERROR = `Grid height should be greater than zero and less than ${MAX_GRID_HEIGHT}`;
// const GRID_WIDTH_ERROR = `Grid width should be greater than zero and less than ${MAX_GRID_WIDTH}`;

//variable declarations
let color, gridHeight, gridWidth;
let table = document.getElementById("pixel_canvas");

//get the color code from color picker
color = document.getElementById("colorPicker").value;
colorPicker.addEventListener("input", function(event) {
  color = document.getElementById("colorPicker").value;
});

//draw the grid when Submit is clicked or Enter/Return key is pressed
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});

/**
 * @description Draws the grid based on the user input for grid height and width
 * @param void
 * @return void
 */
function makeGrid() {

  //clear the existing table rows
  // while (table.rows.length > 0) {
  //   table.deleteRow(0);
  // }
  table.innerHTML = '';

  //get the user input values for grid height and grid width
  gridHeight = document.getElementById("input-height").value;
  gridWidth = document.getElementById("input-width").value;

  //draw table grid and add event listener for each cell
  for (let i = 0; i < gridHeight; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);

      //to change background color when user clicks
      cell.addEventListener("click", function(event) {
        cell.style.backgroundColor = color;
      });

      //to remove the existing color when user double clicks
      cell.addEventListener("dblclick", function(event){
      	cell.style.backgroundColor = "";
      });
    }
  }
}