
//The table constant
const myTable = document.getElementById('pixelCanvas');


// reponse on clicking any table cell
function respondToTheClick(evt) {
  let backgroundcolor = document.getElementById('colorPicker').value;
  evt.target.style.backgroundColor = backgroundcolor;
    //console.log('A par: ' + evt.target.innerHTML);


}

//functions cleans the table for new input
function cleanTable (event) {
  myTable.innerHTML='';
}

// This function create the grid pixelCanvas
function makeGrid(event) {
  cleanTable();
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
for (let i = 1; i <= height; i++) {
    let newTr = document.createElement('tr');
    for (let j = 1; j <= width; j++) {
        let newTd = document.createElement('td');
        //newTd.textContent = j;
        newTr.appendChild(newTd);

    }
    myTable.appendChild(newTr);
}
 event.preventDefault();
}

document.body.appendChild(myTable);

//Variable that identifies form where the submit button is present
let sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', makeGrid, true);
myTable.addEventListener('click', respondToTheClick);
