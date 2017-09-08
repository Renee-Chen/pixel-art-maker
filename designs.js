// CONST declarations
const MAX_GRID_HEIGHT = 50;
const MAX_GRID_WIDTH = 50;
const GRID_HEIGHT_ERROR = `Grid height should be greater than zero and less than ${MAX_GRID_HEIGHT}`;
const GRID_WIDTH_ERROR = `Grid width should be greater than zero and less than ${MAX_GRID_WIDTH}`;

//variable declarations
let color, gridHeight, gridWidth;
let table = document.getElementById("pixel_canvas");

//get the color code from color picker
color = document.getElementById("colorPicker").value;
colorPicker.addEventListener("input", function(event) {
  color = document.getElementById("colorPicker").value;
});

//draw the grid when Submit button is clicked
document.getElementById("button").addEventListener("click", makeGrid);

//draw the grid on Enter/Return key press
document.getElementById("sizePicker").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    makeGrid();
  }
});

/**
 * @description Draws the grid based on the user input for grid height and width
 * @param void
 * @return void
 */
function makeGrid() {

  //clear the existing table rows
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }

  //get the user input values for grid height and grid width
  gridHeight = document.getElementById("input-height").value;
  gridWidth = document.getElementById("input-width").value;


  /* check for negative inputs, input greater than max grid dimensions.
   * This is to prevent cramping of cells to fit to the screen.
   */
  if(gridHeight > MAX_GRID_HEIGHT || gridHeight <= 0) {
  	window.alert(GRID_HEIGHT_ERROR);
  	return;
  }

  if(gridWidth > MAX_GRID_WIDTH || gridWidth <= 0) {
  	window.alert(GRID_WIDTH_ERROR);
  	return;
  }

  //draw table grid and add event listener for each cell
  for (let i = 0; i < gridHeight; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);

      //to change background color when user clicks
      cell.addEventListener("mousedown", function(event) {
        cell.style.backgroundColor = color;
      });

      //to remove the existing color when user double clicks
      cell.addEventListener("dblclick", function(event){
      	cell.style.backgroundColor = "";
      });
    }
  }
}