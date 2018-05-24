// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

//cache selectors to a variable for re-using
const sizePicker = document.querySelector("#sizePicker");
const canvas = document.querySelector("#pixelCanvas");
const colorPicker = document.querySelector("#colorPicker");

// listener creates the grid according to the value of the user inputs
sizePicker.addEventListener('submit', function makeGrid(evt){

// store user input values to a variable    
var row = document.querySelector("#inputHeight").value;
var col = document.querySelector("#inputWidth").value;

//clear canvas whenever the submit button is pressed 
pixelCanvas.innerHTML = '';

// dinamically generates the rows and cols according to user input
for (let i = 0; i < row; i++)
{
    let newRow = document.createElement("tr");

    for(let j = 0; j < col; j++)
    {
        let newCol = document.createElement("td");
        //attach a column at the end of a row
        newRow.appendChild(newCol);
    }
 // attach a row to the end of the table element
canvas.appendChild(newRow);
}
// prevents the default refresh behavior of submit button
evt.preventDefault();
});

// function change the background color of each cell
function addColorEvent(evt) {
    if (evt.target.nodeName.toLowerCase() === "td") {
        evt.target.style.backgroundColor = colorPicker.value;
      }
}
// listener for the cells
canvas.addEventListener("click",addColorEvent);











